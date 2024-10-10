/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.servidores.LoginyReserva1.controllers;

import com.servidores.LoginyReserva1.logica.Role;
import com.servidores.LoginyReserva1.logica.Usuario;
import com.servidores.LoginyReserva1.repositorio.RoleRepository;
import com.servidores.LoginyReserva1.repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private RoleRepository roleRepository;

    // Crear un nuevo usuario
    @PostMapping("/crear")
    public ResponseEntity<Usuario> crearUsuario(@RequestBody Usuario usuario) {
        Usuario nuevoUsuario = usuarioRepository.save(usuario);
        return ResponseEntity.ok(nuevoUsuario);
    }

    // Obtener todos los usuarios
    @GetMapping("/todos")
    public List<Usuario> obtenerTodosLosUsuarios() {
        return usuarioRepository.findAll();
    }

    // Buscar un usuario por nombre
    @GetMapping("/buscar/{nombre}")
    public ResponseEntity<Usuario> buscarUsuarioPorNombre(@PathVariable String nombre) {
        Optional<Usuario> usuario = usuarioRepository.findByNombre(nombre);
        if (usuario.isPresent()) {
            return ResponseEntity.ok(usuario.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Asignar un rol a un usuario
    @PostMapping("/{usuarioId}/roles/{roleId}")
    public ResponseEntity<Usuario> asignarRol(@PathVariable Long usuarioId, @PathVariable Long roleId) {
        Optional<Usuario> usuario = usuarioRepository.findById(usuarioId);
        Optional<Role> role = roleRepository.findById(roleId);

        if (usuario.isPresent() && role.isPresent()) {
            usuario.get().getRoles().add(role.get());
            usuarioRepository.save(usuario.get());
            return ResponseEntity.ok(usuario.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    //Borrar un usuario
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUsuario(@PathVariable Long id) {
        Optional<Usuario> usuarioOpt = usuarioRepository.findById(id);
        if (usuarioOpt.isPresent()) {
            usuarioRepository.delete(usuarioOpt.get());
            return ResponseEntity.ok("Usuario eliminado exitosamente");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado");
        }
    }
}
