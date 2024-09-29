
package com.mycompany.reserva.Vista;

import com.mycompany.reserva.logica.Cliente;
import com.mycompany.reserva.logica.Paquete;
import java.util.Scanner;

public class Vista {
    private Scanner scanner;

    public Vista() {
        this.scanner = new Scanner(System.in);
    }

    public Cliente getClienteInput() {
        System.out.print("Ingrese el ID del cliente: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // Limpiar el buffer
        System.out.print("Ingrese el nombre del cliente: ");
        String nombre = scanner.nextLine();
        System.out.print("Ingrese el email del cliente: ");
        String email = scanner.nextLine();
        return new Cliente(id, nombre, email);
    }

    public Paquete getPaqueteInput() {
        System.out.print("Ingrese el ID del paquete: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // Limpiar el buffer
        System.out.print("Ingrese el destino del paquete: ");
        String destino = scanner.nextLine();
        System.out.print("Ingrese la fecha de salida (YYYY-MM-DD): ");
        String fechaSalida = scanner.nextLine();
        System.out.print("Ingrese el precio del paquete: ");
        double precio = scanner.nextDouble();
        return new Paquete(id, destino, fechaSalida, precio);
    }
}

