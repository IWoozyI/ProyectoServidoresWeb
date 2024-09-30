consultas = []

def enviar_consulta(cliente, mensaje):
    consulta = {"cliente": cliente, "mensaje": mensaje}
    consultas.append(consulta)
    return "Consulta enviada correctamente."

def ver_consultas():
    return consultas
