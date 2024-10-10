cmake_minimum_required(VERSION 3.10)
project(SistemaVuelosComentarios)

set(CMAKE_CXX_STANDARD 11)

# Agrega las rutas de inclusión para CppREST y SOCI
include_directories(include)

# Encuentra y enlaza las bibliotecas
find_package(CppRest REQUIRED)
find_package(SOCI REQUIRED)

# Agrega los archivos fuente
add_executable(SistemaVuelosComentarios src/main.cpp src/vuelo.cpp src/comentario.cpp)

# Vincula las bibliotecas
target_link_libraries(SistemaVuelosComentarios PRIVATE CppRest::CppRest SOCI::soci SOCI::postgresql)
