import boto3
import pickle
import os
from datetime import datetime
import datetime
import shutil

def download_file_from_s3(bucket_name, object_key, local_directory):
    # Initialize the S3 client
    s3 = boto3.client('s3')
    
    # Specify the local file path
    local_file_path = os.path.join(local_directory, os.path.basename(object_key))  


    # Create the 'downloads' directory if it doesn't exist
    if not os.path.exists(local_directory):
        os.makedirs(local_directory)

    # Download the file
    s3.download_file(bucket_name, object_key, local_file_path)

    print(f"File {object_key} downloaded to {local_file_path}")
    return local_file_path

# Constants
bucket_name = 'marketwiz-s3-mumbai'
local_directory = 'downloadss'

price = input("Enter the price of the item: ")
days = int(input("Enter the number of days: "))




if ((days)>=0 or (days)<=7) and (price.isdigit() and (int(price)>0)):
    local_file_economicModel = download_file_from_s3(bucket_name, 'economic-bucket/gbp-srilanka-model/gbpSLModel.pkl', local_directory)

    from datetime import datetime
    # Get the current date
    current_date = datetime.now()

    # Format the date as year, month, date
    formatted_date = current_date.strftime("%Y, %m, %d")
    formatted_date = formatted_date.split(", ")
    current_date=formatted_date[0]+"/"+formatted_date[1]+"/"+formatted_date[2]

    # Given string
    date_string = current_date

    date_parts = date_string.split("/")

    date_parts = [part.lstrip("0") for part in date_parts]

    current_date = "/".join(date_parts)

    print(current_date)


    order = (1, 0, 1)
    economicModel = pickle.load(open(local_file_economicModel, 'rb'))

    forecast_steps = 7
    forecast = economicModel.get_forecast(steps=forecast_steps)
    forecast_values = forecast.predicted_mean
    predictions = []
    n_day=days-1
    current_gbp_rate = forecast_values.iloc[0]
    predicted_gbp_on_n_day = forecast_values.iloc[n_day]

    predicted_price = (float(price)*predicted_gbp_on_n_day)/current_gbp_rate

    predicted_price=float(f"{predicted_price}")
    print(f"{predicted_price:.2f}")## this is what needs to be displayed in the frontend

    shutil.rmtree("downloadss")
    
else:
    print("Invalid number of days")
