import boto3
import pickle
import os
from datetime import datetime
import pandas as pd

# Initialize the S3 client
s3 = boto3.client('s3')

# Specify the bucket name and the object key
bucket_name = 'marketwiz-s3-mumbai'
object_key = 'weather-bucket/colombo-model/weatherModel.pkl'
local_directory = 'downloads'  # Directory where you want to save the downloaded file locally
local_file_path = os.path.join(local_directory, 'weatherModel.pkl')  

print("Downloading the file..")

# Create the 'downloads' directory if it doesn't exist
if not os.path.exists(local_directory):
    os.makedirs(local_directory)

# Download the file
s3.download_file(bucket_name, object_key, local_file_path)

print(f"File {object_key} downloaded to {local_file_path}")

#Prediction
current_date = datetime.now().date()

# Extract year, month, and day components
year = current_date.year
month = current_date.month
day = current_date.day

# Combine inputs into a datetime object
user_date = datetime(year, month, day)
print(user_date)

# Convert datetime to float
float_representation = user_date.timestamp()

T_Min = 33.0
T_Max = 33.0
T_Avg = (T_Min+T_Max)/2
print("Reading parameters")
user_data = pd.DataFrame({
#     'RF': [0],  # You may assume 0 rainfall for simplicity
    'T max ': [T_Max],
    'T min': [T_Min],
    'Avg_tem': [T_Avg],
    'DATE' : [float_representation],
})
weather_model_path = 'downloads/weatherModel.pkl'
weather_model = pickle.load(open(weather_model_path,'rb'))
rainfall = weather_model.predict(user_data)
print(f'Predicted Average RainFall: {rainfall[0]:.2f}')