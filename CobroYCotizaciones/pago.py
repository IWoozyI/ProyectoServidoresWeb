import select
from database import get_db
from sqlalchemy.orm import Session
from models import Pago

def procesar_pago(cliente, monto, metodo_pago, db):
    try:
        pago = Pago(cliente=cliente, monto=monto, metodo_pago=metodo_pago)
        db.add(pago)  
        db.commit() 
        return {"message": "Pago procesado exitosamente"}
    except Exception as e:
        db.rollback() 
        return {"error": str(e)}

def ver_pagos(cliente: str, db: Session):
    try:
        pagos = db.query(Pago).filter(Pago.cliente == cliente).all()
        if pagos:
            pagos_dict = [pago.to_dict() for pago in pagos]
            return {"pagos": pagos_dict}
        return {"message": "No se encontraron pagos para el cliente"}
    except Exception as e:
        return {"error": str(e)}
