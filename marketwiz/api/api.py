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

app = Flask(__name__)
@app.route('/time', methods=['GET'])
def get_current_time():
    return {'time': time.time()}


@app.route('/ml')
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
    gbpPredictions = [forecast_values.iloc[i] for i in range(forecast_steps)]

    # Store predictions in JSON format
    temp["Units Sold"] = np.abs(predicted_units_sold.astype(int))
    results = temp[["Product Name", "Units Sold"]]
    shutil.rmtree(local_directory)
    
    sales_prediction_json = list(results.to_dict(orient='records'))
    T_Avg = float(f"{T_Avg:.2f}")
    rainfall = float(f"{rainfall[0]:.2f}")
    weather_prediction_json = {"T_Avg": T_Avg, "Rainfall": rainfall}
    economic_prediction_json = {"GBP": gbpPredictions[1:]}
    
    
    return jsonify(weather_prediction_json, sales_prediction_json, economic_prediction_json)  
