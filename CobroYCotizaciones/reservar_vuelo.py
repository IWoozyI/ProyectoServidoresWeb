from flask import jsonify
from database import conectar, cerrar_conexion

def buscar_vuelo(origen, destino, fecha):
    connection = conectar()
    if not connection:
        return {"error": "No se pudo conectar a la base de datos"}

    try:
        cursor = connection.cursor()
        query = "SELECT * FROM vuelos WHERE origen = %s AND destino = %s AND fecha = %s;"
        cursor.execute(query, (origen, destino, fecha))
        vuelos = cursor.fetchall()

        if not vuelos:
            return {"message": "No se encontraron vuelos"}

        return {"vuelos": [{"vuelo_id": vuelo[0], "origen": vuelo[1], "destino": vuelo[2], "fecha": vuelo[3], "precio": vuelo[4]} for vuelo in vuelos]}

    except Exception as error:
        return {"error": str(error)}

    finally:
        cerrar_conexion(connection)

def agregar_vuelo(origen, destino, fecha, precio):
    connection = conectar()
    if not connection:
        return {"error": "No se pudo conectar a la base de datos"}

    try:
        cursor = connection.cursor()
        query = """
        INSERT INTO vuelos (origen, destino, fecha, precio) 
        VALUES (%s, %s, %s, %s) 
        RETURNING vuelo_id;
        """
        cursor.execute(query, (origen, destino, fecha, precio))
        vuelo_id = cursor.fetchone()[0]
        connection.commit()
        cursor.close()
        return {"message": "Vuelo agregado", "vuelo_id": vuelo_id}

    except Exception as error:
        connection.rollback()
        return {"error": str(error)}

    finally:
        cerrar_conexion(connection)

def reservar_vuelo(vuelo_id, cliente):
    connection = conectar()
    if not connection:
        return {"error": "No se pudo conectar a la base de datos"}

    try:
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM vuelos WHERE vuelo_id = %s;", (vuelo_id,))
        vuelo = cursor.fetchone()

        if not vuelo:
            return {"message": "Vuelo no encontrado"}

        query = """
        INSERT INTO reservas (vuelo_id, cliente) 
        VALUES (%s, %s) 
        RETURNING id;
        """
        cursor.execute(query, (vuelo_id, cliente))
        reserva_id = cursor.fetchone()[0]
        connection.commit()
        cursor.close()
        return {"message": "Vuelo reservado", "reserva_id": reserva_id}

    except Exception as error:
        connection.rollback()
        return {"error": str(error)}

    finally:
        cerrar_conexion(connection)
