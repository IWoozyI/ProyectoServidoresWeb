/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.servidores.LoginyReserva1.controllers;

import com.servidores.LoginyReserva1.logica.ReservaDTO;
import com.servidores.LoginyReserva1.logica.Cliente;
import com.servidores.LoginyReserva1.logica.Paquete;
import com.servidores.LoginyReserva1.logica.Reserva;
import com.servidores.LoginyReserva1.repositorio.ClienteRepository;
import com.servidores.LoginyReserva1.repositorio.PaqueteRepository;
import com.servidores.LoginyReserva1.repositorio.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservas")
public class ReservaController {

    @Autowired
    private ReservaRepository reservaRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private PaqueteRepository paqueteRepository;

    @GetMapping
    public List<Reserva> getAllReservas() {
        return reservaRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reserva> getReservaById(@PathVariable Long id) {
        return reservaRepository.findById(id)
                .map(reserva -> ResponseEntity.ok(reserva))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Reserva> createReserva(@RequestBody ReservaDTO reservaDTO) {
        // Buscar cliente por ID
        Cliente cliente = clienteRepository.findById(reservaDTO.getClienteId())
                .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));

        // Buscar paquete por ID
        Paquete paquete = paqueteRepository.findById(reservaDTO.getPaqueteId())
                .orElseThrow(() -> new RuntimeException("Paquete no encontrado"));

        // Crear la reserva
        Reserva reserva = new Reserva();
        reserva.setCliente(cliente);
        reserva.setPaquete(paquete);
        reserva.setFechaReserva(reservaDTO.getFechaReserva()); // Establece la fecha desde el DTO

        // Guardar la reserva
        Reserva nuevaReserva = reservaRepository.save(reserva);

        return ResponseEntity.status(201).body(nuevaReserva);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reserva> updateReserva(@PathVariable Long id, @RequestBody ReservaDTO reservaDTO) {
        return reservaRepository.findById(id)
                .map(reserva -> {
                    // Actualizar la fecha de reserva
                    reserva.setFechaReserva(reservaDTO.getFechaReserva());

                    // Buscar cliente por ID
                    Cliente cliente = clienteRepository.findById(reservaDTO.getClienteId())
                            .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));
                    reserva.setCliente(cliente);

                    // Buscar paquete por ID
                    Paquete paquete = paqueteRepository.findById(reservaDTO.getPaqueteId())
                            .orElseThrow(() -> new RuntimeException("Paquete no encontrado"));
                    reserva.setPaquete(paquete);

                    return ResponseEntity.ok(reservaRepository.save(reserva));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteReserva(@PathVariable Long id) {
        return reservaRepository.findById(id)
                .map(reserva -> {
                    reservaRepository.delete(reserva);
                    return ResponseEntity.noContent().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
