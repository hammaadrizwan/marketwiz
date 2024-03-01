from flask import Flask, render_template, redirect, url_for
import pandas as pd
import subprocess
from subprocess import Popen
import os
import time

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
    # run the first subprocess
    subprocess.Popen(['python', 'run.py']).wait()

    # sleep for a small amount of time to ensure the CSV is updated.
    time.sleep(1)

    return redirect(url_for('index'))

if __name__ == '__main__':
    # now the flask app can be executed
    app.run(debug=True)
