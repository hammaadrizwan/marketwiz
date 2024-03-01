from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route("/")
def index():
    # assuming you have named the CSV file as predictions.csv
    df = pd.read_csv("SalesPredictions.csv")
    data_columns = df.columns
    data_values = df.values.tolist()

    return render_template("index.html", columns= data_columns, data= data_values)

if __name__ == '__main__':
    app.run(debug=True)
