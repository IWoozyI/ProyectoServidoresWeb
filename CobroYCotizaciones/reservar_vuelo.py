vuelos_disponibles = [
    {"vuelo_id": 1, "origen": "Madrid", "destino": "Manta", "fecha": "2024-10-01", "precio": 300},
    {"vuelo_id": 2, "origen": "Manta", "destino": "Madrid", "fecha": "2024-10-05", "precio": 300},
]

def buscar_vuelo(origen, destino, fecha):
    for vuelo in vuelos_disponibles:
        if vuelo["origen"] == origen and vuelo["destino"] == destino and vuelo["fecha"] == fecha:
            return vuelo
    return "No se encontraron vuelos."

def reservar_vuelo(vuelo_id):
    for vuelo in vuelos_disponibles:
        if vuelo["vuelo_id"] == vuelo_id:
            return f"Vuelo reservado exitosamente: {vuelo}"
    return "El vuelo no está disponible."
