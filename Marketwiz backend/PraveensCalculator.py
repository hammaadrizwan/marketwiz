from datetime import datetime

# Get the current date
current_date = datetime.now()

# Format the date as year, month, date
formatted_date = current_date.strftime("%Y, %m, %d")
formatted_date = formatted_date.split(", ")
current_date=formatted_date[0]+"/"+formatted_date[1]+"/"+formatted_date[2]
print(current_date)

order = (1, 0, 1)
economicModel = pickle.load(open(local_file_economicModel, 'rb'))

forecast_steps = 7
forecast = economicModel.get_forecast(steps=forecast_steps)
forecast_values = forecast.predicted_mean
predictions = []

price = input("Enter the price of the item: ")
days = int(input("Enter the number of days: "))

if (days-1)>=0 or (days-1)<=7:
    n_day=days-1
    current_gbp_rate = forecast[0]
    predicted_gbp_on_n_day = forecast[n_day]

    predicted_price = (float(price)/current_gbp_rate)*predicted_gbp_on_n_day
    print(predicted_price)