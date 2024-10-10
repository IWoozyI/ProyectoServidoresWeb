#ifndef COMENTARIO_H
#define COMENTARIO_H

#include <string>
#include <vector>

class Comentario {
private:
    std::string autor;
    std::string texto;

public:
    Comentario(const std::string& autor, const std::string& texto);
    void mostrarComentario() const;
    std::string obtenerAutor() const;
    std::string obtenerTexto() const;
};

class SistemaDeComentarios {
private:
    std::vector<Comentario> comentarios;

public:
    void agregarComentario(const std::string& autor, const std::string& texto);
    void mostrarComentarios() const;
};

#endif // COMENTARIO_H
