# from flask import Flask, jsonify, request
# from reservar_vuelo import buscar_vuelo, reservar_vuelo, eliminar_reserva, agregar_vuelo
# from pago import procesar_pago, ver_pagos
# from reembolso import procesar_reembolso, ver_reembolsos
# from itinerario import generar_itinerario, ver_itinerario
# from soporte import enviar_consulta_soporte, ver_consultas_soporte
# from database import get_db

# app = Flask(__name__)

# # Ruta para buscar vuelo
# @app.route('/buscar_vuelo', methods=['GET'])
# def buscar_vuelo_route():
#     origen = request.args.get('origen')
#     destino = request.args.get('destino')
#     fecha = request.args.get('fecha')
#     if not origen or not destino or not fecha:
#         return jsonify({"error": "Faltan parámetros requeridos (origen, destino, fecha)"}), 400
#     db = next(get_db())  
#     vuelos = buscar_vuelo(origen, destino, fecha, db)
#     if not vuelos:
#         return jsonify({"error": "No se encontraron vuelos"}), 404
#     vuelos_list = [vuelo.to_dict() for vuelo in vuelos]
#     return jsonify(vuelos_list), 200

# @app.route('/reservar_vuelo', methods=['POST'])
# def reservar_vuelo_route():
#     data = request.json
#     vuelo_id = data.get('vuelo_id')
#     cliente = data.get('cliente')
#     db = next(get_db())
#     respuesta = reservar_vuelo(vuelo_id, cliente, db)
#     return jsonify(respuesta), 201

# @app.route('/eliminar_reserva', methods=['DELETE'])
# def eliminar_reserva_route():
#     data = request.get_json() 
#     if not data or 'id' not in data:
#         return jsonify({"error": "ID de reserva es requerido"}), 400
#     reserva_id = data['id']
#     db = next(get_db()) 
#     respuesta = eliminar_reserva(reserva_id, db)
#     return jsonify(respuesta), 200

# @app.route('/agregar_vuelo', methods=['POST'])
# def agregar_vuelo_route():
#     data = request.json
#     origen = data.get('origen')
#     destino = data.get('destino')
#     fecha = data.get('fecha')
#     precio = data.get('precio')
#     db = next(get_db()) 
#     respuesta = agregar_vuelo(origen, destino, fecha, precio, db)
#     return jsonify(respuesta), 201

# @app.route("/procesar_pago", methods=["POST"])
# def procesar_pago_route():
#     try:
#         data = request.get_json()
#         cliente = data["cliente"]
#         monto = data["monto"]
#         metodo_pago = data["metodo_pago"]
#         db = next(get_db())  
#         response = procesar_pago(cliente, monto, metodo_pago, db)
#         return jsonify(response)
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# @app.route('/ver_pagos', methods=['GET'])
# def ver_pagos_route():
#     cliente = request.args.get('cliente') 
#     db = next(get_db())
#     return ver_pagos(cliente, db)

# @app.route('/procesar_reembolso', methods=['POST'])
# def procesar_reembolso_route():
#     data = request.json
#     cliente = data.get('cliente')
#     monto = data.get('monto')
#     motivo = data.get('motivo')
#     if not cliente or not monto or not motivo:
#         return jsonify({"error": "Faltan datos requeridos (cliente, monto, motivo)"}), 400
#     db = next(get_db())
#     return procesar_reembolso(cliente, monto, motivo, db)

# @app.route('/ver_reembolsos', methods=['GET'])
# def ver_reembolsos_route():
#     data = request.args 
#     cliente = data.get('cliente')     
#     if not cliente:
#         return jsonify({"error": "Faltan datos requeridos (cliente)"}), 400
#     db = next(get_db())
#     return ver_reembolsos(cliente, db)

# @app.route('/generar_itinerario', methods=['POST'])
# def generar_itinerario_route():
#     data = request.json
#     cliente = data.get('cliente')
#     vuelos = data.get('vuelos')
#     actividades = data.get('actividades')
#     db = next(get_db()) 
#     return generar_itinerario(cliente, vuelos, actividades, db)

# @app.route('/ver_itinerario', methods=['GET'])
# def ver_itinerario_route():
#     cliente = request.args.get('cliente') 
#     db = next(get_db())
#     return ver_itinerario(cliente, db)

# @app.route('/enviar_consulta_soporte', methods=['POST'])
# def enviar_consulta_soporte_route():
#     data = request.json
#     cliente = data.get('cliente')
#     mensaje = data.get('mensaje')    
#     db = next(get_db())  # Asegúrate de usar la sesión de la base de datos correcta
#     respuesta = enviar_consulta_soporte(cliente, mensaje, db)
#     return jsonify(respuesta), 200



# @app.route('/ver_consultas_soporte', methods=['GET'])
# def ver_consultas_soporte_route():
#     cliente = request.args.get('cliente') 
#     if not cliente:
#         return jsonify({"error": "Cliente es requerido"}), 400  
#     respuesta = ver_consultas_soporte(cliente)
#     return jsonify(respuesta), 200


# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, jsonify, request
from reservar_vuelo import buscar_vuelo, reservar_vuelo, eliminar_reserva, agregar_vuelo
from pago import procesar_pago, ver_pagos
from reembolso import procesar_reembolso, ver_reembolsos
from itinerario import generar_itinerario, ver_itinerario
from soporte import enviar_consulta_soporte, ver_consultas_soporte
from database import get_db
from flasgger import Swagger

app = Flask(__name__)
app.config['SWAGGER'] = {
    'title': 'Documentación de API de Reservas de Vuelo',
    'uiversion': 3
}

swagger = Swagger(app)

@app.route('/buscar_vuelo', methods=['GET'])
def buscar_vuelo_route():
    """
    Buscar vuelos según el origen, destino y fecha.
    ---
    parameters:
      - name: origen
        in: query
        type: string
        required: true
        description: El origen del vuelo.
      - name: destino
        in: query
        type: string
        required: true
        description: El destino del vuelo.
      - name: fecha
        in: query
        type: string
        required: true
        description: La fecha en la que se desea reservar el vuelo.
    responses:
      200:
        description: Vuelos encontrados
        content:
          application/json:
            schema:
              type: array
              items:
                type: object
                properties:
                  id:
                    type: integer
                  origen:
                    type: string
                  destino:
                    type: string
                  fecha:
                    type: string
                  precio:
                    type: number
      400:
        description: Faltan parámetros requeridos
      404:
        description: No se encontraron vuelos
    """
    origen = request.args.get('origen')
    destino = request.args.get('destino')
    fecha = request.args.get('fecha')
    if not origen or not destino or not fecha:
        return jsonify({"error": "Faltan parámetros requeridos (origen, destino, fecha)"}), 400
    db = next(get_db())
    vuelos = buscar_vuelo(origen, destino, fecha, db)
    if not vuelos:
        return jsonify({"error": "No se encontraron vuelos"}), 404
    vuelos_list = [vuelo.to_dict() for vuelo in vuelos]
    return jsonify(vuelos_list), 200

@app.route('/reservar_vuelo', methods=['POST'])
def reservar_vuelo_route():
    """
    Reservar un vuelo para un cliente.
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          type: object
          properties:
            vuelo_id:
              type: integer
              description: ID del vuelo a reservar.
            cliente:
              type: string
              description: Nombre del cliente que realiza la reserva.
    responses:
      201:
        description: Reserva realizada con éxito
      400:
        description: Faltan parámetros requeridos
    """
    data = request.json
    vuelo_id = data.get('vuelo_id')
    cliente = data.get('cliente')
    db = next(get_db())
    respuesta = reservar_vuelo(vuelo_id, cliente, db)
    return jsonify(respuesta), 201

@app.route('/eliminar_reserva', methods=['DELETE'])
def eliminar_reserva_route():
    """
    Eliminar una reserva por su ID.
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          type: object
          properties:
            id:
              type: integer
              description: ID de la reserva.
    responses:
      200:
        description: Reserva eliminada con éxito
      400:
        description: ID de reserva es requerido
      404:
        description: Reserva no encontrada
    """
    data = request.get_json()
    if not data or 'id' not in data:
        return jsonify({"error": "ID de reserva es requerido"}), 400
    reserva_id = data['id']
    db = next(get_db())
    respuesta = eliminar_reserva(reserva_id, db)
    return jsonify(respuesta), 200

@app.route('/agregar_vuelo', methods=['POST'])
def agregar_vuelo_route():
    """
    Agregar un nuevo vuelo.
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          type: object
          properties:
            origen:
              type: string
              description: Origen del vuelo.
            destino:
              type: string
              description: Destino del vuelo.
            fecha:
              type: string
              description: Fecha del vuelo.
            precio:
              type: number
              description: Precio del vuelo.
    responses:
      201:
        description: Vuelo agregado con éxito
    """
    data = request.json
    origen = data.get('origen')
    destino = data.get('destino')
    fecha = data.get('fecha')
    precio = data.get('precio')
    db = next(get_db())
    respuesta = agregar_vuelo(origen, destino, fecha, precio, db)
    return jsonify(respuesta), 201

@app.route("/procesar_pago", methods=["POST"])
def procesar_pago_route():
    """
    Procesar un pago.
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          type: object
          properties:
            cliente:
              type: string
              description: Nombre del cliente que realiza el pago.
            monto:
              type: number
              description: Monto del pago.
            metodo_pago:
              type: string
              description: Método de pago.
    responses:
      200:
        description: Pago procesado con éxito
    """
    try:
        data = request.get_json()
        cliente = data["cliente"]
        monto = data["monto"]
        metodo_pago = data["metodo_pago"]
        db = next(get_db())
        response = procesar_pago(cliente, monto, metodo_pago, db)
        return jsonify(response)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/ver_pagos', methods=['GET'])
def ver_pagos_route():
    """
    Ver pagos de un cliente.
    ---
    parameters:
      - name: cliente
        in: query
        type: string
        required: true
        description: El cliente que realizó el pago.
    responses:
      200:
        description: Pagos del cliente
        content:
          application/json:
            schema:
              type: array
              items:
                type: object
                properties:
                  id:
                    type: integer
                  cliente:
                    type: string
                  monto:
                    type: number
                  metodo_pago:
                    type: string
      400:
        description: Faltan parámetros requeridos
    """
    cliente = request.args.get('cliente')
    db = next(get_db())
    return ver_pagos(cliente, db)

@app.route('/procesar_reembolso', methods=['POST'])
def procesar_reembolso_route():
    """
    Procesar un reembolso.
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          type: object
          properties:
            cliente:
              type: string
            monto:
              type: number
            motivo:
              type: string
    responses:
      200:
        description: Reembolso procesado con éxito
      400:
        description: Faltan datos requeridos
    """
    data = request.json
    cliente = data.get('cliente')
    monto = data.get('monto')
    motivo = data.get('motivo')
    if not cliente or not monto or not motivo:
        return jsonify({"error": "Faltan datos requeridos (cliente, monto, motivo)"}), 400
    db = next(get_db())
    return procesar_reembolso(cliente, monto, motivo, db)

@app.route('/ver_reembolsos', methods=['GET'])
def ver_reembolsos_route():
    """
    Ver los reembolsos de un cliente.
    ---
    parameters:
      - name: cliente
        in: query
        type: string
        required: true
        description: El cliente que solicitó el reembolso.
    responses:
      200:
        description: Reembolsos del cliente
        content:
          application/json:
            schema:
              type: array
              items:
                type: object
                properties:
                  id:
                    type: integer
                  cliente:
                    type: string
                  monto:
                    type: number
                  motivo:
                    type: string
      400:
        description: Faltan datos requeridos
    """
    cliente = request.args.get('cliente')
    if not cliente:
        return jsonify({"error": "Faltan datos requeridos (cliente)"}), 400
    db = next(get_db())
    return ver_reembolsos(cliente, db)

@app.route('/generar_itinerario', methods=['POST'])
def generar_itinerario_route():
    """
    Generar un itinerario para un cliente.
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          type: object
          properties:
            cliente:
              type: string
              description: Nombre del cliente.
            vuelos:
              type: array
              items:
                type: integer
              description: Lista de IDs de vuelos.
            actividades:
              type: array
              items:
                type: string
              description: Lista de actividades en el itinerario.
    responses:
      200:
        description: Itinerario generado con éxito
    """
    data = request.json
    cliente = data.get('cliente')
    vuelos = data.get('vuelos', [])
    actividades = data.get('actividades', [])
    if not cliente or not vuelos or not actividades:
        return jsonify({"error": "Datos requeridos faltantes (cliente, vuelos, actividades)"}), 400
    db = next(get_db())
    respuesta = generar_itinerario(cliente, vuelos, actividades, db)
    return jsonify(respuesta), 200

@app.route('/ver_itinerario', methods=['GET'])
def ver_itinerario_route():
    """
    Ver el itinerario de un cliente.
    ---
    parameters:
      - name: cliente
        in: query
        type: string
        required: true
        description: El nombre del cliente.
    responses:
      200:
        description: Itinerario del cliente
        content:
          application/json:
            schema:
              type: object
              properties:
                cliente:
                  type: string
                vuelos:
                  type: array
                  items:
                    type: object
                    properties:
                      vuelo_id:
                        type: integer
                      origen:
                        type: string
                      destino:
                        type: string
                      fecha:
                        type: string
      400:
        description: Faltan parámetros requeridos
    """
    cliente = request.args.get('cliente')
    db = next(get_db())
    return ver_itinerario(cliente, db)

@app.route('/enviar_consulta_soporte', methods=['POST'])
def enviar_consulta_soporte_route():
    """
    Enviar una consulta al equipo de soporte.
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          type: object
          properties:
            cliente:
              type: string
              description: El nombre del cliente que envía la consulta.
            consulta:
              type: string
              description: La descripción de la consulta.
    responses:
      200:
        description: Consulta enviada con éxito
    """
    data = request.json
    cliente = data.get('cliente')
    consulta = data.get('consulta')
    db = next(get_db())
    return enviar_consulta_soporte(cliente, consulta, db)

@app.route('/ver_consultas_soporte', methods=['GET'])
def ver_consultas_soporte_route():
    """
    Ver consultas enviadas al equipo de soporte.
    ---
    parameters:
      - name: cliente
        in: query
        type: string
        required: true
        description: El nombre del cliente.
    responses:
      200:
        description: Consultas del cliente
        content:
          application/json:
            schema:
              type: array
              items:
                type: object
                properties:
                  id:
                    type: integer
                  cliente:
                    type: string
                  consulta:
                    type: string
      400:
        description: Faltan parámetros requeridos
    """

    cliente = request.args.get('cliente')
    if not cliente:
        return jsonify({"error": "Faltan parámetros requeridos (cliente)"}), 400
    respuesta = ver_consultas_soporte(cliente)
    return jsonify(respuesta), 200

if __name__ == "__main__":
    app.run(debug=True)
