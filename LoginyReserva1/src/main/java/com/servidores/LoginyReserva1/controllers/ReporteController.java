package com.servidores.LoginyReserva1.controllers;

import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.servidores.LoginyReserva1.logica.Cliente;
import com.servidores.LoginyReserva1.repositorio.ClienteRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/reportes")
public class ReporteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping("/clientes")
    public void generarReporteClientes(HttpServletResponse response) throws IOException {
        response.setContentType("application/pdf");
        response.setHeader("Content-Disposition", "attachment; filename=clientes.pdf");

        PdfWriter writer = new PdfWriter(response.getOutputStream());
        Document document = new Document(new com.itextpdf.kernel.pdf.PdfDocument(writer));

        List<Cliente> clientes = clienteRepository.findAll();
        document.add(new Paragraph("Reporte de Clientes"));
        for (Cliente cliente : clientes) {
            document.add(new Paragraph("ID: " + cliente.getId() + ", Nombre: " + cliente.getNombre() + ", Email: " + cliente.getEmail()));
        }

        document.close();
    }
}
