package com.servidores.LoginyReserva1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
    "com.servidores.LoginyReserva1.controllers", 
    "com.servidores.LoginyReserva1.logica", 
    "com.servidores.LoginyReserva1.repositorio"
})
public class LoginyReserva1Application {

    public static void main(String[] args) {
        SpringApplication.run(LoginyReserva1Application.class, args);
    }
}
