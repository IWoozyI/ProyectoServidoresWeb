itinerarios = []

def generar_itinerario(cliente, vuelos, actividades):
    itinerario = {
        "cliente": cliente,
        "vuelos": vuelos,
        "actividades": actividades
    }
    itinerarios.append(itinerario)
    return f"Itinerario creado: {itinerario}"

def ver_itinerario(cliente):
    for itin in itinerarios:
        if itin["cliente"] == cliente:
            return itin
    return "Itinerario no encontrado."
