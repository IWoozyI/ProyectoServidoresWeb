#include <iostream>
#include <vector>
#include <string>

using namespace std;

struct Vuelo {
    int vuelo_id;
    string origen;
    string destino;
    string fecha;
    float precio;
};

void enviarNotificacion(const string& mensaje) {
    cout << "🔔 Notificación: " << mensaje << endl;
}

Vuelo buscarVuelo(const vector<Vuelo>& vuelos_disponibles, const string& origen, const string& destino, const string& fecha) {
    for (const auto& vuelo : vuelos_disponibles) {
        if (vuelo.origen == origen && vuelo.destino == destino && vuelo.fecha == fecha) {
            return vuelo;
        }
    }
    enviarNotificacion("No se encontraron vuelos disponibles.");
    return {0, "", "", "", 0.0};
}

bool reservarVuelo(const Vuelo& vuelo) {
    if (vuelo.vuelo_id != 0) {
        enviarNotificacion("Vuelo reservado exitosamente.");
        cout << "Detalles del vuelo reservado:\n";
        cout << "Origen: " << vuelo.origen << "\nDestino: " << vuelo.destino << "\nFecha: " << vuelo.fecha << "\nPrecio: $" << vuelo.precio << endl;
        return true;
    } else {
        enviarNotificacion("No se pudo reservar el vuelo.");
        return false;
    }
}

int main() {

    vector<Vuelo> vuelos_disponibles = {
        {1, "Ciudad A", "Ciudad B", "2024-10-01", 300.0},
        {2, "Ciudad A", "Ciudad C", "2024-10-05", 450.0},
        {3, "Ciudad B", "Ciudad C", "2024-11-01", 500.0}
    };

    string origen, destino, fecha;

    cout << "Ingrese el origen del vuelo: ";
    getline(cin, origen);
    cout << "Ingrese el destino del vuelo: ";
    getline(cin, destino);
    cout << "Ingrese la fecha del vuelo (YYYY-MM-DD): ";
    getline(cin, fecha);

    Vuelo vuelo_encontrado = buscarVuelo(vuelos_disponibles, origen, destino, fecha);

    if (vuelo_encontrado.vuelo_id != 0) {
        reservarVuelo(vuelo_encontrado);
    }

    return 0;
}
