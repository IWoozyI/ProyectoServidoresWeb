from sqlalchemy.orm import Session
from models import Vuelo, Reserva

def buscar_vuelo(origen: str, destino: str, fecha: str, db: Session):
    vuelos = db.query(Vuelo).filter(Vuelo.origen == origen, Vuelo.destino == destino, Vuelo.fecha == fecha).all()
    return vuelos

def reservar_vuelo(vuelo_id: int, cliente: str, db: Session):
    vuelo = db.query(Vuelo).filter(Vuelo.vuelo_id == vuelo_id).first()
    if not vuelo:
        return {"error": "Vuelo no encontrado"}, 404
    nueva_reserva = Reserva(cliente=cliente, vuelo_id=vuelo_id)
    db.add(nueva_reserva)
    db.commit()
    return {"message": "Reserva realizada con éxito", "reserva_id": nueva_reserva.id}

def eliminar_reserva(reserva_id: int, db: Session):
    reserva = db.query(Reserva).filter(Reserva.id == reserva_id).first()
    if not reserva:
        return {"error": "Reserva no encontrada"}, 404
    db.delete(reserva)
    db.commit()
    return {"message": "Reserva eliminada con éxito"}

def agregar_vuelo(origen: str, destino: str, fecha: str, precio: float, db: Session):
    nuevo_vuelo = Vuelo(origen=origen, destino=destino, fecha=fecha, precio=precio)
    db.add(nuevo_vuelo)
    db.commit()
    return {"message": "Vuelo agregado con éxito", "vuelo_id": nuevo_vuelo.vuelo_id}
