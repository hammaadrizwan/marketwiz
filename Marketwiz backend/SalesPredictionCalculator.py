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

def download_file_from_s3(bucket_name, object_key, local_directory):
    # Initialize the S3 client
    s3 = boto3.client('s3')
    
    # Specify the local file path
    local_file_path = os.path.join(local_directory, os.path.basename(object_key))  

    print("Downloading the file..")

    # Create the 'downloads' directory if it doesn't exist
    if not os.path.exists(local_directory):
        os.makedirs(local_directory)

    # Download the file
    s3.download_file(bucket_name, object_key, local_file_path)

    print(f"File {object_key} downloaded to {local_file_path}")
    return local_file_path

import datetime

def get_current_date():
    # Get current date
    current_date = datetime.datetime.now().date()

    # Extract year, month, and day components
    year = current_date.year
    month = current_date.month
    day = current_date.day

    # Combine inputs into a datetime object
    return datetime.datetime(year, month, day)


def convert_date_to_float(date):
    # Convert datetime to float
    return date.timestamp()

def get_temperature(api_key, city_name):
    BASE_URL = "http://api.openweathermap.org/data/2.5/weather?"
    url = f"{BASE_URL}appid={api_key}&q={city_name}"
    response = requests.get(url).json()
    temp_min_celsius = response['main']['temp_min'] - 273.15
    temp_max_celsius = response['main']['temp_max'] - 273.15
    return temp_min_celsius, temp_max_celsius

def predict_rainfall(user_data, weather_model_path):
    weather_model = pickle.load(open(weather_model_path,'rb'))
    return weather_model.predict(user_data)
def weekOfYearCalculator(date):
    # Get the week of the year
    week_of_year = date.isocalendar()[1]
    return week_of_year

def dayOfWeekCalculator(date):
    # Get the day of the week
    day_of_week = date.isocalendar()[2]
    return day_of_week

def IsAHoliday(dayOfWeek):
    if dayOfWeek == 6 or dayOfWeek == 7:
        dayType = 1
    else:
        dayType = 0
    return dayType

def monthCalculator(date):
    # Get the month
    month = date.month
    return month

def yearCalculator(date):
    # Get the year
    year = date.year
    return year

def dayCalculator(date):
    # Get the day
    day = date.day
    return day
def initialiseValuesToDataset(date, rainfall, dataset):
    weekOfYear = weekOfYearCalculator(date)
    dayOfWeek = dayOfWeekCalculator(date)
    isHoliday = IsAHoliday(dayOfWeek)
    day = dayCalculator(date)
    month = monthCalculator(date)
    year = yearCalculator(date)
    dataset["Week_of_Year"].fillna(int(weekOfYear), inplace=True)
    dataset["Week_of_Year"] = dataset["Week_of_Year"].astype(int)

    dataset["DayOfWeek"].fillna(int(dayOfWeek), inplace=True)
    dataset["DayOfWeek"] = dataset["DayOfWeek"].astype(int)

    dataset["IsAHoliday"].fillna(isHoliday, inplace=True)
    dataset["IsAHoliday"] = dataset["IsAHoliday"].astype(int)

    dataset["Day"].fillna(int(day), inplace=True)
    dataset["Day"] = dataset["Day"].astype(int)

    dataset["Month"].fillna(int(month), inplace=True)
    dataset["Month"] = dataset["Month"].astype(int)

    dataset["Year"].fillna(int(year), inplace=True)
    dataset["Year"] = dataset["Year"].astype(int)

    dataset["Rainfall"].fillna(rainfall, inplace=True)
    return dataset


def main():

    # Specify the path of the file you want to remove
    file_path = 'SalesPredictions.csv'
    economic_predictions_path = 'SalesPredictions.csv'
    # Check if the file exists before attempting to remove it
    if os.path.exists(file_path):
        # Remove the file
        os.remove(file_path)
        print(f"{file_path} has been successfully removed.")
    else:
        print(f"The file {file_path} does not exist.")
    if os.path.exists(economic_predictions_path):
        # Remove the file
        os.remove(economic_predictions_path)
        print(f"{economic_predictions_path} has been successfully removed.")
    else:
        print(f"The file {file_path} does not exist.")
    # Constants
    bucket_name = 'marketwiz-s3-mumbai'
    object_key = 'weather-bucket/colombo-model/weatherModel.pkl'
    local_directory = 'downloads'
    api_key = "a1cffafa176a92a84c228d49cef0a38b"
    city_name = "Colombo"

    # Download the file from S3
    local_file_path = download_file_from_s3(bucket_name, object_key, local_directory)
    

    # Get current date
    current_date = get_current_date()
    float_representation = convert_date_to_float(current_date)
    
    # Get temperature
    T_Min, T_Max = get_temperature(api_key, city_name)
    T_Avg = (T_Min + T_Max) / 2
    print("Reading parameters")
    user_data = pd.DataFrame({
        'T max ': [T_Max],
        'T min': [T_Min],
        'Avg_tem': [T_Avg],
        'DATE' : [float_representation],
    })

    # Predict rainfall
    rainfall = predict_rainfall(user_data, local_file_path)
    print(f'Predicted Average Rainfall: {rainfall[0]:.2f}')

    
    # Download the file from S3
    local_file_salesEncoder_path = download_file_from_s3(bucket_name, 'sales-bucket/udayagiri-colombo-srilanka-model/encoder.joblib', local_directory)
    print("Predictions file downloaded")

    local_file_salesPredictonTemplate_path = download_file_from_s3(bucket_name, 'sales-bucket/udayagiri-colombo-srilanka-model/Predictions.csv', local_directory)
    print("Predictions file downloaded")

    local_file_salesModel_path = download_file_from_s3(bucket_name, 'sales-bucket/udayagiri-colombo-srilanka-model/salesModel.pkl', local_directory)
    print("Sales model file downloaded")

    local_file_salesScaler_path = download_file_from_s3(bucket_name, 'sales-bucket/udayagiri-colombo-srilanka-model/scaler.joblib', local_directory)
    print("Scaler file downloaded")

    local_file_economicModel = download_file_from_s3(bucket_name, 'economic-bucket/gbp-srilanka-model/gbpSLModel.pkl', local_directory)

    print("Economic model file downloaded")

    order = (1, 0, 1)
    economicModel = pickle.load(open(local_file_economicModel, 'rb'))

    forecast_steps = 31
    forecast = economicModel.get_forecast(steps=forecast_steps)
    forecast_values = forecast.predicted_mean
    
    gbpPredictions = []
    for i in range(forecast_steps): 
        gbpPredictions.append(forecast_values.iloc[i])
    pd.DataFrame(gbpPredictions).to_csv("gbpPredictions.csv",index=False)


    date=current_date
    rainfall=float(f"{rainfall[0]:.2f}")
    new_record = pd.read_csv(local_file_salesPredictonTemplate_path)
    new_record=initialiseValuesToDataset(date,rainfall,new_record)
    results=new_record
    print("Unpacking sales model files")
    scaler = joblib.load(local_file_salesScaler_path)# Load the scaler
    encoder = joblib.load(local_file_salesEncoder_path)# Load the encoder
    model = pickle.load(open(local_file_salesModel_path, 'rb'))# Load the model

    columns_to_drop = ["Product Name", "Units Sold"]#not needed for prediction
    new_record = new_record.drop(columns=columns_to_drop)  

    # Separate numeric and categorical columns
    numeric_cols_new_record = new_record.select_dtypes(include=['number'])#get the numeric columns and store in a variable
    categorical_cols_new_record = new_record.select_dtypes(exclude=['number'])#get the categorical columns and store in a variable

    # Preprocess the numeric columns Scale the numeric columns of the new record
    numeric_cols_new_record_scaled = scaler.transform(numeric_cols_new_record)

    # Encode the categorical columns of the new record
    categorical_cols_new_record_encoded = pd.DataFrame(encoder.transform(categorical_cols_new_record).toarray(),
                                                    columns=encoder.get_feature_names_out(['Category']))

    # Combine the preprocessed numeric and categorical columns
    numeric_cols=numeric_cols_new_record.columns
    new_record[numeric_cols] = numeric_cols_new_record_scaled
    new_record = pd.concat([new_record, categorical_cols_new_record_encoded], axis=1)
    new_record.drop(columns="Category", inplace=True)

    # Make predictions
    predicted_units_sold = model.predict(new_record)

    # Store the predicted units sold in the results dataframe
    results["Units Sold"] = np.abs(predicted_units_sold.astype(int))
    results = results[["Product Name", "Units Sold"]]
    print("Prediciton Complete")
    results.to_csv("SalesPredictions.csv",index=False)
    shutil.rmtree("downloads")


if __name__ == "__main__":
    main()
