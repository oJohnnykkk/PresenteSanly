from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def index():
    inicio = datetime(2023, 5, 27, 0, 0, 0)
    agora = datetime.now()
    delta = agora - inicio

    anos = delta.days // 365
    meses = (delta.days % 365) // 30
    dias = (delta.days % 365) % 30
    horas = delta.seconds // 3600
    minutos = (delta.seconds % 3600) // 60
    segundos = delta.seconds % 60

    return render_template("index.html",
                           anos=anos,
                           meses=meses,
                           dias=dias,
                           horas=horas,
                           minutos=minutos,
                           segundos=segundos)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
