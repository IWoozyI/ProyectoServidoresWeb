from sqlalchemy import select
from database import get_db  
from models import Itinerario
from sqlalchemy.orm import Session

def generar_itinerario(cliente, vuelos, actividades, db):
    try:
        itinerario = Itinerario(cliente=cliente, vuelos=vuelos, actividades=actividades)
        db.add(itinerario)
        db.commit()
        return {"message": "Itinerario generado exitosamente"}
    except Exception as e:
        return {"error": str(e)}
    finally:
        db.close() 


def ver_itinerario(cliente, db):
    try:
        itinerarios = db.query(Itinerario).filter(Itinerario.cliente == cliente).all()
        if itinerarios:
            itinerarios_dict = [itinerario.to_dict() for itinerario in itinerarios]
            return {"itinerarios": itinerarios_dict}
        else:
            return {"message": "No se encontró el itinerario"}
    except Exception as e:
        return {"error": str(e)}
    finally:
        db.close()  



