from flask import jsonify
from database import get_db 
from sqlalchemy.orm import Session  
from models import Reembolso
from sqlalchemy import select

def ver_reembolsos(cliente: str, db: Session):
    try:
        reembolsos = db.query(Reembolso).filter(Reembolso.cliente == cliente).all()
        reembolsos_dict = [reembolso.to_dict() for reembolso in reembolsos] 
        return jsonify(reembolsos_dict)
    except Exception as e:
        return {"message": f"Error al consultar los reembolsos: {e}"}


def procesar_reembolso(cliente: str, monto: float, motivo: str, db: Session):
    try:
        nuevo_reembolso = Reembolso(cliente=cliente, monto=monto, motivo=motivo)
        db.add(nuevo_reembolso)
        db.commit()
        return {"message": "Reembolso procesado con éxito", "reembolso_id": nuevo_reembolso.reembolso_id}
    except Exception as e:
        db.rollback()  
        return {"message": f"Error al procesar el reembolso: {e}"}

