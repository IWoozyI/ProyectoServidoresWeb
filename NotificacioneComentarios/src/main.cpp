#include <cpprest/http_listener.h>
#include <cpprest/json.h>
#include "vuelo.h"
#include "comentario.h"

using namespace web;
using namespace web::http;
using namespace web::http::experimental::listener;

VueloManager vueloManager;
SistemaDeComentarios sistemaComentarios;

void handleGetVuelos(const http_request& request) {
    auto vuelos = vueloManager.listarVuelos();
    json::value jsonResponse = json::value::array();
    
    for (size_t i = 0; i < vuelos.size(); ++i) {
        jsonResponse[i] = json::value::object();
        jsonResponse[i][U("vuelo_id")] = json::value::number(vuelos[i].vuelo_id);
        jsonResponse[i][U("origen")] = json::value::string(vuelos[i].origen);
        jsonResponse[i][U("destino")] = json::value::string(vuelos[i].destino);
        jsonResponse[i][U("fecha")] = json::value::string(vuelos[i].fecha);
        jsonResponse[i][U("precio")] = json::value::number(vuelos[i].precio);
    }

    request.reply(status_codes::OK, jsonResponse);
}

void handlePostComentario(const http_request& request) {
    request.extract_json().then([&](json::value jsonRequest) {
        std::string autor = jsonRequest[U("autor")].as_string();
        std::string texto = jsonRequest[U("texto")].as_string();
        sistemaComentarios.agregarComentario(autor, texto);
        request.reply(status_codes::OK, U("Comentario agregado con éxito."));
    }).wait();
}

int main() {
    uri_builder uri(U("http://localhost:8080/api"));
    auto addr = uri.to_uri().to_string();
    http_listener listener(addr);

    listener.support(methods::GET, handleGetVuelos);
    listener.support(methods::POST, handlePostComentario);

    listener
        .open()
        .then([&listener](){ std::wcout << L"Empezando a escuchar en: " << listener.uri().to_string() << std::endl; })
        .wait();

    std::string line;
    std::getline(std::cin, line);

    return 0;
}
