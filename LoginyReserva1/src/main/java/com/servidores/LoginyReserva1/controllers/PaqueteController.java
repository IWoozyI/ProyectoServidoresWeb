/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.servidores.LoginyReserva1.controllers;

import com.servidores.LoginyReserva1.logica.Paquete;
import com.servidores.LoginyReserva1.repositorio.PaqueteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/paquetes")
public class PaqueteController {

    @Autowired
    private PaqueteRepository paqueteRepository;

    @GetMapping
    public List<Paquete> getAllPaquetes() {
        return paqueteRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Paquete> getPaqueteById(@PathVariable Long id) {
        return paqueteRepository.findById(id)
                .map(paquete -> ResponseEntity.ok(paquete))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Paquete createPaquete(@RequestBody Paquete paquete) {
        return paqueteRepository.save(paquete);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Paquete> updatePaquete(@PathVariable Long id, @RequestBody Paquete paqueteDetails) {
        return paqueteRepository.findById(id)
                .map(paquete -> {
                    paquete.setDescripcion(paqueteDetails.getDescripcion());
                    paquete.setPrecio(paqueteDetails.getPrecio());
                    return ResponseEntity.ok(paqueteRepository.save(paquete));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePaquete(@PathVariable Long id) {
        return paqueteRepository.findById(id)
                .map(paquete -> {
                    paqueteRepository.delete(paquete);
                    return ResponseEntity.noContent().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
