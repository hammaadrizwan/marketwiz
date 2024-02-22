from datetime import datetime

# Get the current date
current_date = datetime.now()

# Format the date as year, month, date
formatted_date = current_date.strftime("%Y, %m, %d")

print(formatted_date)

"""
import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.api as sm
from statsmodels.tsa.arima.model import ARIMA
from datetime import datetime

# Import today's date 
todays_date = datetime.today().date()

# Read the CSV file
df = pd.read_csv('C:\\Users\\Dell\\Desktop\\Praveen\\MarketWiz\\DATA\\GBP.csv', parse_dates=['Date'], index_col='Date')

order = (1, 0, 1)

# Fit ARIMA model
model = ARIMA(df['Price'], order=order)
results = model.fit()

# Display the model summary
print(results.summary())

# Forecast for 7 days from today's date
forecast_steps = 7
forecast = results.get_forecast(steps=forecast_steps)
forecast_values = forecast.predicted_mean
predictions = []
# predicted exchange rates for the next 7 days
print("Predicted Exchange Rates for the Next 7 Days:")
for i in range(forecast_steps):
   prediction_date = todays_date + pd.Timedelta(days=i + 1)  
   print(f"{prediction_date}: {forecast_values.iloc[i]}")
   predictions.append(forecast_values.iloc[i])




price = input("Enter the price of the item: ")
days = int(input("Enter the number of days: "))
prices = predictions
daily_increases = [prices[i + 1] - prices[i] for i in range(days )]

# Calculate daily increase rates as percentages
daily_increase_rates = [increase / prices[i] * 100 for i, increase in enumerate(daily_increases)]

# Print daily increase rates
print("Daily Price Increase Rates:")
for i, rate in enumerate(daily_increase_rates):
    print(f"Day {i + 1}: {rate:.2f}%")

# Calculate total price increase and rate
total_increase = sum(daily_increases)
total_increase_rate = total_increase / prices[0] * 100

print(f"\nTotal Price Increase: {total_increase:.2f} LKR")
print(f"Total Increase Rate: {total_increase_rate:.2f}%")



price = float(price)
ans = (price/100)*total_increase_rate

if ans > 0:
    #print(f"The price of the item should increase by {ans:.2f} LKR")
    print(ans)
else:
    print("negative")
    #print(f"The price of the item shouldn't decrease by {ans:.2f} LKR")
if ans > 0:
    print("latese price will be",price+ans)
else:
    print("hv to reduce the price to ",price+ans)
"""