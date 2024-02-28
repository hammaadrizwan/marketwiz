import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.api as sm
from statsmodels.tsa.arima.model import ARIMA
from datetime import datetime

todays_date = datetime.today().date()
order = (1, 0, 1)
predictions = []


def GBP():
    GBPdf = pd.read_csv('gbp.csv', parse_dates=['Date'], index_col='Date')
    model = ARIMA(GBPdf['Price'], order=order)
    results = model.fit()

    # Display the model summary
    #print(results.summary())

    # Forecast for 7 days from today's date
    forecast_steps = 7
    forecast = results.get_forecast(steps=forecast_steps)
    forecast_values = forecast.predicted_mean
    # predicted exchange rates for the next 7 days
    #print("Predicted Exchange Rates for the Next 7 Days:")
    for i in range(forecast_steps):
        prediction_date = todays_date + pd.Timedelta(days=i + 1)  
        #print(f"{prediction_date}: {forecast_values.iloc[i]}")
        predictions.append(forecast_values.iloc[i])

def JPY():
    JPYdf = pd.read_csv('jpy.csv', parse_dates=['Date'], index_col='Date')
    model = ARIMA(JPYdf['Price'], order=order)
    results = model.fit()

    # Display the model summary
    #print(results.summary())

    # Forecast for 7 days from today's date
    forecast_steps = 7
    forecast = results.get_forecast(steps=forecast_steps)
    forecast_values = forecast.predicted_mean
    # predicted exchange rates for the next 7 days
    #print("Predicted Exchange Rates for the Next 7 Days:")
    for i in range(forecast_steps):
        prediction_date = todays_date + pd.Timedelta(days=i + 1)  
        #print(f"{prediction_date}: {forecast_values.iloc[i]}")
        predictions.append(forecast_values.iloc[i])

def USD():
    USDdf = pd.read_csv('usd.csv', parse_dates=['Date'], index_col='Date')
    model = ARIMA(USDdf['Price'], order=order)
    results = model.fit()

    # Display the model summary
    #print(results.summary())

    # Forecast for 7 days from today's date
    forecast_steps = 7
    forecast = results.get_forecast(steps=forecast_steps)
    forecast_values = forecast.predicted_mean
    # predicted exchange rates for the next 7 days
    #print("Predicted Exchange Rates for the Next 7 Days:")
    for i in range(forecast_steps):
        prediction_date = todays_date + pd.Timedelta(days=i + 1)  
        #print(f"{prediction_date}: {forecast_values.iloc[i]}")
        predictions.append(forecast_values.iloc[i])


def main():
    GBP()
    JPY()
    USD()
    for i in range(len(predictions)):
        if i % 7 != 0:
            print(predictions[i],end=" ")
        else:
            print()

main()