import boto3
import pickle
import os
from datetime import datetime
import pandas as pd
import requests

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

def get_current_date():
    # Get current date
    current_date = datetime.now().date()

    # Extract year, month, and day components
    year = current_date.year
    month = current_date.month
    day = current_date.day

    # Combine inputs into a datetime object
    return datetime(year, month, day)

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

def main():
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

if __name__ == "__main__":
    main()
