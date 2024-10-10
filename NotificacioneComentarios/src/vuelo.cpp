#include "vuelo.h"
#include <soci/soci.h>
#include <soci/postgresql/soci-postgresql.h>
#include <iostream>

using namespace soci;

void VueloManager::agregarVuelo(const Vuelo& vuelo) {
    try {
        session sql(postgresql, "dbname=neondb user=neondb_owner password=kGcINRLYj8t& host=ep-weathered-thunder-a5z7dhrk.us-est-2.aws.neon.tech port=5432");
        sql << "INSERT INTO vuelos (vuelo_id, origen, destino, fecha, precio) VALUES (:id, :origen, :destino, :fecha, :precio)",
            use(vuelo.vuelo_id), use(vuelo.origen), use(vuelo.destino), use(vuelo.fecha), use(vuelo.precio);
        std::cout << "Vuelo agregado exitosamente." << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "Error al agregar vuelo: " << e.what() << std::endl;
    }
}

Vuelo VueloManager::buscarVuelo(int vuelo_id) {
    Vuelo vuelo;
    try {
        session sql(postgresql, "dbname=neondb user=neondb_owner password=kGcINRLYj8t& host=ep-weathered-thunder-a5z7dhrk.us-est-2.aws.neon.tech port=5432");
        sql << "SELECT vuelo_id, origen, destino, fecha, precio FROM vuelos WHERE vuelo_id = :id",
            use(vuelo_id), into(vuelo.vuelo_id), into(vuelo.origen), into(vuelo.destino), into(vuelo.fecha), into(vuelo.precio);
    } catch (const std::exception& e) {
        std::cerr << "Error al buscar vuelo: " << e.what() << std::endl;
    }
    return vuelo;
}

std::vector<Vuelo> VueloManager::listarVuelos() {
    std::vector<Vuelo> vuelos;
    try {
        session sql(postgresql, "dbname=neondb user=neondb_owner password=kGcINRLYj8t& host=ep-weathered-thunder-a5z7dhrk.us-est-2.aws.neon.tech port=5432");
        Vuelo vuelo;
        statement st = (sql.prepare << "SELECT vuelo_id, origen, destino, fecha, precio", into(vuelo.vuelo_id), into(vuelo.origen), into(vuelo.destino), into(vuelo.fecha), into(vuelo.precio));
        
        st.execute();
        while (st.fetch()) {
            vuelos.push_back(vuelo);
        }
    } catch (const std::exception& e) {
        std::cerr << "Error al listar vuelos: " << e.what() << std::endl;
    }
    return vuelos;
}
