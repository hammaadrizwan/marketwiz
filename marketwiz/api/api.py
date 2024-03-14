from flask import Flask, make_response, jsonify
import boto3
import pickle
import os
from datetime import datetime
import pandas as pd
import datetime
import joblib
import requests
import numpy as np
import shutil
import time

app = Flask(__name__,static_folder="../dist",static_url_path="/")

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/time')
def get_current_time():
    current_time = time.time()
    hour = int(time.strftime('%H', time.localtime(current_time)))
    if 6 <= hour < 12:
        time_type = "Morning"
    elif 12 <= hour < 18:
        time_type = "Afternoon"
    elif 18 <= hour < 22:
        time_type = "Evening"
    else:
        time_type = "Night"
    return {'time': current_time, 'time_type': time_type}


@app.route('/api/ml')
def predict():
    # Download file from S3
    s3 = boto3.client('s3')
    bucket_name = 'marketwiz-s3-mumbai'
    object_key = 'weather-bucket/colombo-model/weatherModel.pkl'
    local_directory = 'downloads'

    local_file_path = os.path.join(local_directory, os.path.basename(object_key))  
    if not os.path.exists(local_directory):
        os.makedirs(local_directory)
    s3.download_file(bucket_name, object_key, local_file_path)

    # Get current date
    current_datetime = datetime.datetime.now()
    float_representation = current_datetime.timestamp()

    # Get temperature
    BASE_URL = "http://api.openweathermap.org/data/2.5/weather?"
    api_key = "a1cffafa176a92a84c228d49cef0a38b"
    city_name = "Colombo"
    url = f"{BASE_URL}appid={api_key}&q={city_name}"
    response = requests.get(url).json()
    temp_min_celsius = response['main']['temp_min'] - 273.15
    temp_max_celsius = response['main']['temp_max'] - 273.15
    T_Avg = (temp_min_celsius + temp_max_celsius) / 2
    user_data = pd.DataFrame({
        'T max ': [temp_max_celsius],
        'T min': [temp_min_celsius],
        'Avg_tem': [T_Avg],
        'DATE' : [float_representation],
    })

    # Predict rainfall
    weather_model_path = local_file_path
    weather_model = pickle.load(open(weather_model_path,'rb'))
    rainfall = weather_model.predict(user_data)

    # Download additional files from S3
    local_file_salesEncoder_path = os.path.join(local_directory, 'encoder.joblib')
    object_key = 'sales-bucket/udayagiri-colombo-srilanka-model/encoder.joblib'
    s3.download_file(bucket_name, object_key, local_file_salesEncoder_path)

    local_file_salesPredictonTemplate_path = os.path.join(local_directory, 'Predictions.csv')
    object_key = 'sales-bucket/udayagiri-colombo-srilanka-model/Predictions.csv'
    s3.download_file(bucket_name, object_key, local_file_salesPredictonTemplate_path)

    local_file_salesModel_path = os.path.join(local_directory, 'salesModel.pkl')
    object_key = 'sales-bucket/udayagiri-colombo-srilanka-model/salesModel.pkl'
    s3.download_file(bucket_name, object_key, local_file_salesModel_path)

    local_file_salesScaler_path = os.path.join(local_directory, 'scaler.joblib')
    object_key = 'sales-bucket/udayagiri-colombo-srilanka-model/scaler.joblib'
    s3.download_file(bucket_name, object_key, local_file_salesScaler_path)

    # Initialize data
    new_record = pd.read_csv(local_file_salesPredictonTemplate_path)
    week_of_year = current_datetime.isocalendar()[1]
    day_of_week = current_datetime.isocalendar()[2]
    is_holiday = 1 if day_of_week == 6 or day_of_week == 7 else 0
    day = current_datetime.day
    month = current_datetime.month
    year = current_datetime.year
    new_record["Week_of_Year"].fillna(int(week_of_year), inplace=True)
    new_record["Week_of_Year"] = new_record["Week_of_Year"].astype(int)
    new_record["DayOfWeek"].fillna(int(day_of_week), inplace=True)
    new_record["DayOfWeek"] = new_record["DayOfWeek"].astype(int)
    new_record["IsAHoliday"].fillna(is_holiday, inplace=True)
    new_record["IsAHoliday"] = new_record["IsAHoliday"].astype(int)
    new_record["Day"].fillna(int(day), inplace=True)
    new_record["Day"] = new_record["Day"].astype(int)
    new_record["Month"].fillna(int(month), inplace=True)
    new_record["Month"] = new_record["Month"].astype(int)
    new_record["Year"].fillna(int(year), inplace=True)
    new_record["Year"] = new_record["Year"].astype(int)
    new_record["Rainfall"].fillna(rainfall[0], inplace=True)

    temp = new_record

    # Load model and preprocess data
    encoder = joblib.load(local_file_salesEncoder_path)
    scaler = joblib.load(local_file_salesScaler_path)
    model = pickle.load(open(local_file_salesModel_path, 'rb'))
    columns_to_drop = ["Product Name", "Units Sold"]
    new_record = new_record.drop(columns=columns_to_drop)
    numeric_cols_new_record = new_record.select_dtypes(include=['number'])
    categorical_cols_new_record = new_record.select_dtypes(exclude=['number'])
    numeric_cols_new_record_scaled = scaler.transform(numeric_cols_new_record)
    categorical_cols_new_record_encoded = pd.DataFrame(encoder.transform(categorical_cols_new_record).toarray(),
                                                    columns=encoder.get_feature_names_out(['Category']))
    numeric_cols = numeric_cols_new_record.columns
    new_record[numeric_cols] = numeric_cols_new_record_scaled
    new_record = pd.concat([new_record, categorical_cols_new_record_encoded], axis=1)
    new_record.drop(columns="Category", inplace=True)

    # Make predictions
    predicted_units_sold = model.predict(new_record)

    # Download economic model from S3
    local_file_economicModel = os.path.join(local_directory, 'gbpSLModel.pkl')
    object_key = 'economic-bucket/gbp-srilanka-model/gbpSLModel.pkl'
    s3.download_file(bucket_name, object_key, local_file_economicModel)

    # Predict economic data
    economicModel = pickle.load(open(local_file_economicModel, 'rb'))
    forecast_steps = 31
    forecast = economicModel.get_forecast(steps=forecast_steps)
    forecast_values = forecast.predicted_mean
    gbpPredictions = {i: forecast_values.iloc[i] for i in range(1, forecast_steps)}

    # Store predictions in JSON format
    temp["Units Sold"] = np.abs(predicted_units_sold.astype(int))
    results = temp[["Product Name", "Units Sold"]]
    sales = []

    for index, row in results.iterrows():
        sales.append({"Product_Name": row["Product Name"], "Units_Sold": row["Units Sold"]})

    shutil.rmtree(local_directory)
    
    T_Avg = float(f"{T_Avg:.1f}")
    rainfall = float(f"{rainfall[0]:.1f}")
    weather_prediction_json = {"T_Avg": T_Avg, "Rainfall": rainfall}

    
    
    return {
        'args': {},  # Add your arguments if needed
        'headers': {},  # Add your headers if needed
        'url': {},  # Replace with the actual URL if needed
        'weather': weather_prediction_json,  # Weather prediction data
        'sales': sales,  # Sales prediction data
        'economic': gbpPredictions  # Economic predictions
    }

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')