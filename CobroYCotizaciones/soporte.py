from sqlalchemy import select
from database import get_db  
from models import ConsultaSoporte  
from sqlalchemy.orm import Session

def enviar_consulta_soporte(cliente: str, mensaje: str, db: Session):
    nueva_consulta = ConsultaSoporte(cliente=cliente, consulta=mensaje)
    db.add(nueva_consulta) 
    db.commit() 
    return {"message": "Consulta enviada con éxito"}


def ver_consultas_soporte(cliente: str):
    db = next(get_db())  
    try:
        consultas = db.execute(select(ConsultaSoporte).filter_by(cliente=cliente)).scalars().all()
        if not consultas:
            return {"message": "No se encontraron consultas"}
        return {
            "consultas": [
                {
                    "id": consulta.consulta_id, 
                    "cliente": consulta.cliente,
                    "consulta": consulta.consulta
                } for consulta in consultas
            ]
        }
    except Exception as e:
        return {"error": str(e)} 
    finally:
        db.close() 


