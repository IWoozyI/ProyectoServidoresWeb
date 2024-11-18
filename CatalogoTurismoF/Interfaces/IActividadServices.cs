using CatalogoTurismoF.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatalogoTurismoF.Interfaces
{
    public interface IActividadServices
    {
        Task CrearActividad(Actividad actividad);
        Task<Actividad?> BuscarActividadPorNombre(string nombre); // Cambia aquí
        Task<IEnumerable<Actividad>> ObtenerActividades();
        Task ActualizarActividad(Actividad actividad);
        Task EliminarActividad(int id);
    }
}