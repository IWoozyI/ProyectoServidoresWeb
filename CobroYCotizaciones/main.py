from reservar_vuelo import buscar_vuelo, reservar_vuelo, agregar_vuelo
from boleto import emitir_boleto, ver_boleto
from itinerario import generar_itinerario, ver_itinerario
from pago import procesar_pago, ver_pagos
from soporte import enviar_consulta, ver_consultas
from reembolso import procesar_reembolso, ver_reembolsos

def menu_principal():
    print("=== Agencia de Viajes ===")
    print("1. Buscar vuelo")
    print("2. Reservar vuelo")
    print("3. Agregar vuelo")
    print("4. Emitir boleto")
    print("5. Generar itinerario")
    print("6. Procesar pago")
    print("7. Enviar consulta a soporte")
    print("8. Solicitar reembolso")
    print("9. Ver consultas")
    print("10. Ver pagos")
    print("11. Ver boletos")
    print("12. Ver reembolsos")
    print("0. Salir")

def ejecutar_menu():
    cliente = input("Ingrese su nombre: ")

    while True:
        menu_principal()
        opcion = input("Selecciona una opción: ")

        if opcion == "1":
            origen = input("Ingrese el origen: ")
            destino = input("Ingrese el destino: ")
            fecha = input("Ingrese la fecha (YYYY-MM-DD): ")
            vuelo = buscar_vuelo(origen, destino, fecha)
            print(vuelo)

        elif opcion == "2":
            origen = input("Ingrese el origen: ")
            destino = input("Ingrese el destino: ")
            fecha = input("Ingrese la fecha (YYYY-MM-DD): ")
            vuelo = buscar_vuelo(origen, destino, fecha)
            
            if isinstance(vuelo, dict) and "vuelo_id" in vuelo:
                vuelo_id = vuelo["vuelo_id"]
                reserva = reservar_vuelo(vuelo_id, cliente)
                print(reserva)
            else:
                print("No se encontraron vuelos disponibles para reservar.")

        elif opcion == "3":
            origen = input("Ingrese el origen del vuelo: ")
            destino = input("Ingrese el destino del vuelo: ")
            fecha = input("Ingrese la fecha del vuelo (YYYY-MM-DD): ")
            precio = float(input("Ingrese el precio del vuelo: "))
            resultado = agregar_vuelo(origen, destino, fecha, precio)
            print(resultado)

        elif opcion == "4":
            vuelo_id = input("Ingrese el ID del vuelo para emitir el boleto: ")
            boleto = emitir_boleto(cliente, vuelo_id)
            print(boleto)

        elif opcion == "5":
            actividades = ["Tour de la ciudad"]  # Esto podría ser dinámico
            itinerario = generar_itinerario(cliente, [vuelo], actividades)
            print(itinerario)

        elif opcion == "6":
            monto = input("Ingrese el monto a pagar: ")
            metodo_pago = input("Ingrese el método de pago (Tarjeta de Crédito, etc.): ")
            pago = procesar_pago(cliente, monto, metodo_pago)
            print(pago)

        elif opcion == "7":
            consulta = input("Ingrese su consulta: ")
            respuesta = enviar_consulta(cliente, consulta)
            print(respuesta)

        elif opcion == "8":
            monto_reembolso = input("Ingrese el monto a reembolsar: ")
            reembolso = procesar_reembolso(cliente, monto_reembolso)
            print(reembolso)

        elif opcion == "9":
            consultas = ver_consultas()
            print(consultas)

        elif opcion == "10":
            pagos = ver_pagos(cliente)
            print(pagos)

        elif opcion == "11":
            boletos = ver_boleto(cliente)
            print(boletos)

        elif opcion == "12":
            reembolsos = ver_reembolsos(cliente)
            print(reembolsos)

        elif opcion == "0":
            print("Saliendo del programa...")
            break

        else:
            print("Opción no válida, por favor intente de nuevo.")

if __name__ == "__main__":
    ejecutar_menu()
