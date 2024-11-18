using CatalogoTurismoF.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatalogoTurismoF.Interfaces
{
    public interface IPaqueteServices
    {
        Task CrearPaquete(Paquete paquete);
        Task<Paquete?> BuscarPaquetePorNombre(string nombre); // Cambia aquí
        Task<IEnumerable<Paquete>> ObtenerPaquetes();
        Task ActualizarPaquete(Paquete paquete);
        Task EliminarPaquete(int id);
    }
}
