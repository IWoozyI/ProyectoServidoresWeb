package com.mycompany.reserva.logica;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Reserva {
    private int id;
    private Cliente cliente;
    private Paquete paquete;

    public Reserva() {
    }

    public Reserva(int id, Cliente cliente, Paquete paquete) {
        this.id = id;
        this.cliente = cliente;
        this.paquete = paquete;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Paquete getPaquete() {
        return paquete;
    }

    public void setPaquete(Paquete paquete) {
        this.paquete = paquete;
    }
    
    public void guardarReserva(Connection conn) {
        try {
            conn.setAutoCommit(false); 


            String sqlCliente = "INSERT INTO clientes (id, nombre, email) VALUES (?, ?, ?)";
            PreparedStatement stmtCliente = conn.prepareStatement(sqlCliente);
            stmtCliente.setInt(1, cliente.getId());
            stmtCliente.setString(2, cliente.getNombre());
            stmtCliente.setString(3, cliente.getEmail());
            stmtCliente.executeUpdate();


            String sqlPaquete = "INSERT INTO paquetes (id, destino, fechaSalida, precio) VALUES (?, ?, ?, ?)";
            PreparedStatement stmtPaquete = conn.prepareStatement(sqlPaquete);
            stmtPaquete.setInt(1, paquete.getId());
            stmtPaquete.setString(2, paquete.getDestino());
            stmtPaquete.setString(3, paquete.getFechaSalida());
            stmtPaquete.setDouble(4, paquete.getPrecio());
            stmtPaquete.executeUpdate();


            String sqlReserva = "INSERT INTO reservas (id, id_cliente, id_paquete) VALUES (?, ?, ?)";
            PreparedStatement stmtReserva = conn.prepareStatement(sqlReserva);
            stmtReserva.setInt(1, this.id);
            stmtReserva.setInt(2, cliente.getId());
            stmtReserva.setInt(3, paquete.getId());
            stmtReserva.executeUpdate();

            conn.commit(); 

            System.out.println("Reserva creada exitosamente.");
        } catch (SQLException e) {
            try {
                conn.rollback();
                System.out.println("Error en la reserva. Se ha revertido la transacción.");
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
            e.printStackTrace();
        }
    }
}
