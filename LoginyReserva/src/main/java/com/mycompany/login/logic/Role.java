
package com.mycompany.login.logic;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Role implements Serializable {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private String rol_asig;

    public Role() {
    }

    public Role(int id, String rol_asig) {
        this.id = id;
        this.rol_asig = rol_asig;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRol_asig() {
        return rol_asig;
    }

    public void setRol_asig(String rol_asig) {
        this.rol_asig = rol_asig;
    }
    
    
}
