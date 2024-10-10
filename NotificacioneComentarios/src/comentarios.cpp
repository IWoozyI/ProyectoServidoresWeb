#include "comentario.h"
#include <iostream>

Comentario::Comentario(const std::string& autor, const std::string& texto) : autor(autor), texto(texto) {}

void Comentario::mostrarComentario() const {
    std::cout << autor << ": " << texto << std::endl;
}

void SistemaDeComentarios::agregarComentario(const std::string& autor, const std::string& texto) {
    Comentario nuevoComentario(autor, texto);
    comentarios.push_back(nuevoComentario);
}

void SistemaDeComentarios::mostrarComentarios() const {
    if (comentarios.empty()) {
        std::cout << "No hay comentarios para mostrar." << std::endl;
    } else {
        for (const auto& comentario : comentarios) {
            comentario.mostrarComentario();
        }
    }
}
