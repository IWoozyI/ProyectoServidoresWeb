
package com.mycompany.reserva.jpa_controller;

import com.mycompany.reserva.logica.Cliente;
import com.mycompany.reserva.logica.Paquete;
import com.mycompany.reserva.logica.Reserva;
import java.sql.Connection;

public class ReservationController {
        public void crearReserva(Connection conn, Cliente cliente, Paquete paquete) {
        int idReserva = generateReservationId(); // Simulación de generación de ID
        Reserva reserva = new Reserva(idReserva, cliente, paquete);
        reserva.guardarReserva(conn);
    }

    private int generateReservationId() {
        // Simulación de generación de ID único para reserva
        return (int) (Math.random() * 10000);
    }
}
