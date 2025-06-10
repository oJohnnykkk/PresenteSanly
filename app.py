from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def index():
    data_inicio = datetime(2023, 5, 27, 0, 0, 0)  # com hora zero
    return render_template("index.html", data_inicio=data_inicio.isoformat())

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
