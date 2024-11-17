from graphene_sqlalchemy import SQLAlchemyObjectType
import graphene
from models import Vuelo, Reserva, Pago, Reembolso, Itinerario, ConsultaSoporte
from database import SessionLocal

# **Definir los tipos basados en los modelos**
class VueloType(SQLAlchemyObjectType):
    class Meta:
        model = Vuelo

class ReservaType(SQLAlchemyObjectType):
    class Meta:
        model = Reserva

class PagoType(SQLAlchemyObjectType):
    class Meta:
        model = Pago

class ReembolsoType(SQLAlchemyObjectType):
    class Meta:
        model = Reembolso

class ItinerarioType(SQLAlchemyObjectType):
    class Meta:
        model = Itinerario

class ConsultaSoporteType(SQLAlchemyObjectType):
    class Meta:
        model = ConsultaSoporte


# **Definir las Queries**
class Query(graphene.ObjectType):
    all_vuelos = graphene.List(VueloType)
    all_reservas = graphene.List(ReservaType)
    all_pagos = graphene.List(PagoType)
    all_reembolsos = graphene.List(ReembolsoType)
    all_itinerarios = graphene.List(ItinerarioType)
    all_consultas_soporte = graphene.List(ConsultaSoporteType)

    # Resolvers para cada query
    def resolve_all_vuelos(self, info):
        session = SessionLocal()
        return session.query(Vuelo).all()

    def resolve_all_reservas(self, info):
        session = SessionLocal()
        return session.query(Reserva).all()

    def resolve_all_pagos(self, info):
        session = SessionLocal()
        return session.query(Pago).all()

    def resolve_all_reembolsos(self, info):
        session = SessionLocal()
        return session.query(Reembolso).all()

    def resolve_all_itinerarios(self, info):
        session = SessionLocal()
        return session.query(Itinerario).all()

    def resolve_all_consultas_soporte(self, info):
        session = SessionLocal()
        return session.query(ConsultaSoporte).all()


# **Definir las Mutaciones**
# Ejemplo: Crear un nuevo vuelo
class CreateVuelo(graphene.Mutation):
    class Arguments:
        origen = graphene.String(required=True)
        destino = graphene.String(required=True)
        fecha = graphene.String(required=True)  # En formato YYYY-MM-DD
        precio = graphene.Float(required=True)

    vuelo = graphene.Field(VueloType)

    def mutate(self, info, origen, destino, fecha, precio):
        session = SessionLocal()
        nuevo_vuelo = Vuelo(origen=origen, destino=destino, fecha=fecha, precio=precio)
        session.add(nuevo_vuelo)
        session.commit()
        return CreateVuelo(vuelo=nuevo_vuelo)


# Ejemplo: Crear una nueva reserva
class CreateReserva(graphene.Mutation):
    class Arguments:
        cliente = graphene.String(required=True)
        vuelo_id = graphene.Int(required=True)

    reserva = graphene.Field(ReservaType)

    def mutate(self, info, cliente, vuelo_id):
        session = SessionLocal()
        nueva_reserva = Reserva(cliente=cliente, vuelo_id=vuelo_id)
        session.add(nueva_reserva)
        session.commit()
        return CreateReserva(reserva=nueva_reserva)


# Definir el tipo Mutation
class Mutation(graphene.ObjectType):
    create_vuelo = CreateVuelo.Field()
    create_reserva = CreateReserva.Field()


# **Definir el esquema principal**
schema = graphene.Schema(query=Query, mutation=Mutation)
