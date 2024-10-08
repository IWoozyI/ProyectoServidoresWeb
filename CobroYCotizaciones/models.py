from sqlalchemy import Column, Integer, String, Float, ForeignKey, Date, Text
from sqlalchemy.orm import relationship
from database import Base

class Vuelo(Base):
    __tablename__ = 'vuelos'
    vuelo_id = Column(Integer, primary_key=True, autoincrement=True)
    origen = Column(String, nullable=False)
    destino = Column(String, nullable=False)
    fecha = Column(Date, nullable=False)
    precio = Column(Float, nullable=False)

    reservas = relationship("Reserva", back_populates="vuelo")

    def to_dict(self):
        """Convierte la instancia de Vuelo en un diccionario."""
        return {
            'id': self.vuelo_id,
            'origen': self.origen,
            'destino': self.destino,
            'fecha': self.fecha.strftime('%Y-%m-%d %H:%M:%S'),
            'precio': self.precio
        }

class Reserva(Base):
    __tablename__ = 'reservas'
    id = Column(Integer, primary_key=True, autoincrement=True)
    cliente = Column(String, nullable=False)
    vuelo_id = Column(Integer, ForeignKey('vuelos.vuelo_id', ondelete='CASCADE'))

    vuelo = relationship("Vuelo", back_populates="reservas")

class Pago(Base):
    __tablename__ = "pagos"
    
    pago_id = Column(Integer, primary_key=True, autoincrement=True)
    cliente = Column(String, nullable=False)
    monto = Column(Float, nullable=False)
    metodo_pago = Column(String, nullable=False)

    def to_dict(self):
        return {
            "id": self.pago_id,
            "cliente": self.cliente,
            "monto": self.monto,
            "metodo_pago": self.metodo_pago
        }

class Reembolso(Base):
    __tablename__ = 'reembolsos'
    reembolso_id = Column(Integer, primary_key=True, autoincrement=True)
    cliente = Column(String, nullable=False)
    monto = Column(Float, nullable=False)
    motivo = Column(String, nullable=False)
    def to_dict(self):
        return {
            "id": self.reembolso_id,
            "cliente": self.cliente,
            "monto": self.monto,
            "motivo": self.motivo
        }

class Itinerario(Base):
    __tablename__ = 'itinerarios'
    itinerario_id = Column(Integer, primary_key=True, autoincrement=True)
    cliente = Column(String, nullable=False)
    vuelos = Column(String, nullable=False)  
    actividades = Column(String, nullable=False)  

    def to_dict(self):
        return {
            "id": self.itinerario_id,
            "cliente": self.cliente,
            "vuelos": self.vuelos,
            "actividades": self.actividades
        }

class ConsultaSoporte(Base):
    __tablename__ = "consultas_soporte"

    consulta_id = Column(Integer, primary_key=True, index=True)
    cliente = Column(String, index=True)
    consulta = Column(Text, nullable=False)