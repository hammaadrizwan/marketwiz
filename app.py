from flask import Flask, render_template, redirect, url_for
import pandas as pd
import time
import subprocess

app = Flask(__name__)

def load_data():
    # load the CSV file
    df = pd.read_csv("SalesPredictions.csv")
    return df.columns, df.values.tolist()


@app.route('/')
def login_page():
    return render_template("login.html")


@app.route("/index")
def index():
    columns, data = load_data()
    return render_template('index.html', columns=columns, data=data)


@app.route('/login', methods=['POST'])
def login():
    # run the python file to update the CSV file
    subprocess.run(['python', 'PredictingFroms3Contents.py'])

    # hold the program for a small amount of time to ensure the CSv is updated.
    time.sleep(1)

    return redirect(url_for('index'))


if __name__ == '__main__':
    # now the flask app can be executed
    app.run(debug=True)