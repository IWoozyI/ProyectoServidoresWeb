from database import conectar, cerrar_conexion

def emitir_boleto(cliente, vuelo_id):
    connection = conectar()
    if not connection:
        return "No se pudo conectar a la base de datos."

    try:
        cursor = connection.cursor()
        query = """
        INSERT INTO boletos (cliente, vuelo_id) VALUES (%s, %s) RETURNING boleto_id;
        """
        cursor.execute(query, (cliente, vuelo_id))
        boleto_id = cursor.fetchone()[0]
        connection.commit()
        cursor.close()
        return f"Boleto emitido exitosamente. ID de boleto: {boleto_id}"
    except Exception as error:
        return f"Error al emitir boleto: {error}"
    finally:
        cerrar_conexion(connection)

def ver_boleto(cliente):
    connection = conectar()
    if not connection:
        return "No se pudo conectar a la base de datos."

    try:
        cursor = connection.cursor()
        query = "SELECT * FROM boletos WHERE cliente = %s;"
        cursor.execute(query, (cliente,))
        boletos = cursor.fetchall()
        cursor.close()

        if boletos:
            return boletos
        else:
            return "No se encontraron boletos."
    except Exception as error:
        return f"Error al obtener boletos: {error}"
    finally:
        cerrar_conexion(connection)
