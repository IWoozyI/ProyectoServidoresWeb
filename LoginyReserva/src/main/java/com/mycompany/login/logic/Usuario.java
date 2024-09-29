package com.mycompany.login.logic;

import java.io.Serializable;
import java.util.LinkedList;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Usuario implements Serializable {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private String username;
    private String email;
    private String name;
    @OneToMany
    private LinkedList<Role> rol;

    public Usuario() {
    }

    public Usuario(int id, String username, String email, String name, LinkedList<Role> rol) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.name = name;
        this.rol = rol;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LinkedList<Role> getRol() {
        return rol;
    }

    public void setRol(LinkedList<Role> rol) {
        this.rol = rol;
    }
    
    
}
