import boto3
import os
import pickle

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
bucket_name = 'marketwiz-s3-mumbai'
object_key = 'weather-bucket/colombo-model/weatherModel.pkl'
local_directory = 'downloads'
local_file_economicModel = download_file_from_s3(bucket_name, 'economic-bucket/gbp-srilanka-model/gbpSLModel.pkl', local_directory)
print("Scaler file downloaded")
# Load the model from the pickle file
economicModel = pickle.load(open(local_file_economicModel, 'rb'))

# Check the type of the loaded object
print(type(economicModel))

# If it's an ARIMA model, use appropriate method for forecasting
if isinstance(economicModel, ARIMA):
    # Use the appropriate method for forecasting, for example, forecast() or predict()
    forecast_values = economicModel.forecast(steps=forecast_steps)
    gbpValue = forecast_values[0]
    print("Forecasted GBP value:", gbpValue)
else:
    print("Loaded object is not an ARIMA model.")
