#include <iostream>
#include <vector>
#include <string>

class Comentario {
private:
    std::string autor;
    std::string texto;

public:
    Comentario(const std::string& autor, const std::string& texto) : autor(autor), texto(texto) {}

    void mostrarComentario() const {
        std::cout << autor << ": " << texto << std::endl;
    }

    std::string obtenerAutor() const {
        return autor;
    }

    std::string obtenerTexto() const {
        return texto;
    }
};

class SistemaDeComentarios {
private:
    std::vector<Comentario> comentarios;

public:
    void agregarComentario(const std::string& autor, const std::string& texto) {
        Comentario nuevoComentario(autor, texto);
        comentarios.push_back(nuevoComentario);
    }

    void mostrarComentarios() const {
        if (comentarios.empty()) {
            std::cout << "No hay comentarios para mostrar." << std::endl;
        } else {
            for (const auto& comentario : comentarios) {
                comentario.mostrarComentario();
            }
        }
    }
};

int main() {
    SistemaDeComentarios sistema;
    int opcion;
    std::string autor, texto;

    do {
        std::cout << "Sistema de Comentarios" << std::endl;
        std::cout << "1. Agregar comentario" << std::endl;
        std::cout << "2. Ver comentarios" << std::endl;
        std::cout << "3. Salir" << std::endl;
        std::cout << "Selecciona una opcion: ";
        std::cin >> opcion;
        std::cin.ignore();  // Limpiar el buffer de entrada

        switch (opcion) {
        case 1:
            std::cout << "Ingresa el nombre del autor: ";
            std::getline(std::cin, autor);
            std::cout << "Escribe el comentario: ";
            std::getline(std::cin, texto);
            sistema.agregarComentario(autor, texto);
            std::cout << "Comentario agregado con exito!" << std::endl;
            break;
        case 2:
            std::cout << "Comentarios:" << std::endl;
            sistema.mostrarComentarios();
            break;
        case 3:
            std::cout << "Saliendo del sistema." << std::endl;
            break;
        default:
            std::cout << "Opcion no valida. Intenta nuevamente." << std::endl;
            break;
        }
    } while (opcion != 3);

    return 0;
}
