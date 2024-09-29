package com.mycompany.reserva.logica;

public class Paquete {
    private int id;
    private String destino;
    private String fechaSalida;
    private double precio;

    public Paquete() {
    }

    public Paquete(int id, String destino, String fechaSalida, double precio) {
        this.id = id;
        this.destino = destino;
        this.fechaSalida = fechaSalida;
        this.precio = precio;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public String getFechaSalida() {
        return fechaSalida;
    }

    public void setFechaSalida(String fechaSalida) {
        this.fechaSalida = fechaSalida;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }
    
    
}
