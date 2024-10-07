from flask import Flask, request, jsonify
from reservar_vuelo import buscar_vuelo, reservar_vuelo, agregar_vuelo

app = Flask(__name__)

@app.route('/buscar_vuelo', methods=['GET'])
def api_buscar_vuelo():
    origen = request.args.get('origen')
    destino = request.args.get('destino')
    fecha = request.args.get('fecha')
    return jsonify(buscar_vuelo(origen, destino, fecha))

@app.route('/reservar_vuelo', methods=['POST'])
def api_reservar_vuelo():
    data = request.get_json()
    vuelo_id = data.get('vuelo_id')
    cliente = data.get('cliente')
    return jsonify(reservar_vuelo(vuelo_id, cliente))

@app.route('/agregar_vuelo', methods=['POST'])
def api_agregar_vuelo():
    data = request.get_json()
    origen = data.get('origen')
    destino = data.get('destino')
    fecha = data.get('fecha')
    precio = data.get('precio')
    return jsonify(agregar_vuelo(origen, destino, fecha, precio))

if __name__ == '__main__':
    app.run(debug=True)
