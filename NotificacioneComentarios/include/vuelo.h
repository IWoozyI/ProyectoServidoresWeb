#ifndef VUELO_H
#define VUELO_H

#include <string>
#include <vector>

struct Vuelo {
    int vuelo_id;
    std::string origen;
    std::string destino;
    std::string fecha;
    float precio;
};

class VueloManager {
public:
    void agregarVuelo(const Vuelo& vuelo);
    Vuelo buscarVuelo(int vuelo_id);
    std::vector<Vuelo> listarVuelos();
};

#endif // VUELO_H
