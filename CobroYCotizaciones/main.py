from reservar_vuelo import buscar_vuelo, reservar_vuelo
from itinerario import generar_itinerario, ver_itinerario
from boleto import emitir_boleto, ver_boleto
from soporte import enviar_consulta, ver_consultas
from pago import procesar_pago, ver_pagos
from reembolso import procesar_reembolso, ver_reembolsos

cliente = "Miguel Zamora"

def menu():
    print("\n--- Agencia de Viajes ---")
    print("1. Buscar y reservar vuelo")
    print("2. Generar itinerario")
    print("3. Emitir boleto")
    print("4. Procesar pago")
    print("5. Enviar consulta al soporte")
    print("6. Ver itinerario")
    print("7. Ver boletos emitidos")
    print("8. Ver pagos realizados")
    print("9. Ver consultas enviadas")
    print("10. Procesar reembolso")
    print("0. Salir")
    return input("Seleccione una opción: ")

def main():
    while True:
        opcion = menu()

        if opcion == "1":
            origen = input("Ingrese el origen: ")
            destino = input("Ingrese el destino: ")
            fecha = input("Ingrese la fecha (YYYY-MM-DD): ")
            vuelo = buscar_vuelo(origen, destino, fecha)
            print(vuelo)

            if vuelo != "No se encontraron vuelos.":
                confirmar = input(f"¿Desea reservar el vuelo {vuelo}? (si/no): ")
                if confirmar.lower() == "si":
                    reserva = reservar_vuelo(vuelo["vuelo_id"])
                    print(reserva)
        
        elif opcion == "2":
            vuelos = input("Ingrese los vuelos (separados por comas): ").split(',')
            actividades = input("Ingrese las actividades (separadas por comas): ").split(',')
            itinerario = generar_itinerario(cliente, vuelos, actividades)
            print("Itinerario generado:", itinerario)

        elif opcion == "3":
            vuelo_id = input("Ingrese el vuelo para emitir el boleto: ")
            boleto = emitir_boleto(cliente, vuelo_id)
            print("Boleto emitido:", boleto)

        elif opcion == "4":
            monto = float(input("Ingrese el monto del pago: "))
            metodo_pago = input("Ingrese el método de pago: ")
            pago = procesar_pago(cliente, monto, metodo_pago)
            print("Pago procesado:", pago)

        elif opcion == "5":
            mensaje = input("Ingrese su consulta: ")
            consulta = enviar_consulta(cliente, mensaje)
            print(consulta)

        elif opcion == "6":
            itinerario = ver_itinerario(cliente)
            print("Itinerario del cliente:", itinerario)

        elif opcion == "7":
            boleto = ver_boleto(cliente)
            print("Boleto del cliente:", boleto)

        elif opcion == "8":
            pagos = ver_pagos(cliente)
            print("Pagos del cliente:", pagos)

        elif opcion == "9":
            consultas = ver_consultas()
            print("Consultas enviadas:", consultas)

        elif opcion == "10":
            monto = float(input("Ingrese el monto del reembolso: "))
            reembolso = procesar_reembolso(cliente, monto)
            print("Reembolso procesado:", reembolso)

        elif opcion == "0":
            print("Saliendo del sistema...")
            break

        else:
            print("Opción no válida, por favor intente de nuevo.")

if __name__ == "__main__":
    main()
