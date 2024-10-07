/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.servidores.LoginyReserva1.controllers;

/**
 *
 * @author Woozy
 */
import com.servidores.LoginyReserva1.logica.Role;
import com.servidores.LoginyReserva1.repositorio.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/roles")
public class RoleController {

    @Autowired
    private RoleRepository roleRepository;

    // Crear un nuevo rol
    @PostMapping("/crear")
    public ResponseEntity<Role> crearRol(@RequestBody Role role) {
        Role nuevoRole = roleRepository.save(role);
        return ResponseEntity.ok(nuevoRole);
    }

    // Obtener todos los roles
    @GetMapping("/todos")
    public List<Role> obtenerTodosLosRoles() {
        return roleRepository.findAll();
    }

    // Buscar un rol por nombre
    @GetMapping("/buscar/{nombre}")
    public ResponseEntity<Role> buscarRolPorNombre(@PathVariable String nombre) {
        Optional<Role> role = roleRepository.findByNombre(nombre);
        if (role.isPresent()) {
            return ResponseEntity.ok(role.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
