import psycopg2
from psycopg2 import sql

def conectar():
    try:
        connection = psycopg2.connect(
            dbname="ProyectoServidor",
            user="postgres",
            password="211214",
            host="localhost",  # o la IP del servidor de PostgreSQL
            port="5432"  # El puerto por defecto de PostgreSQL
        )
        return connection
    except Exception as error:
        print(f"Error al conectar a la base de datos: {error}")
        return None

def cerrar_conexion(connection):
    if connection:
        connection.close()
