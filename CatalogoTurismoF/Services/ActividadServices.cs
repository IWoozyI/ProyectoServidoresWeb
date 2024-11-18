using CatalogoTurismoF.Context;
using CatalogoTurismoF.Interfaces;
using CatalogoTurismoF.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatalogoTurismoF.Services
{
    public class ActividadService : IActividadServices
    {
        private readonly AppDbContext _context;

        public ActividadService(AppDbContext context)
        {
            _context = context;
        }

        public async Task CrearActividad(Actividad actividad)
        {
            await _context.Actividades.AddAsync(actividad);
            await _context.SaveChangesAsync();
        }

        public async Task<Actividad?> BuscarActividadPorNombre(string nombre)
        {
            return await _context.Actividades.FirstOrDefaultAsync(a => a.NombreActividad.Equals(nombre, StringComparison.OrdinalIgnoreCase));
        }

        public async Task<IEnumerable<Actividad>> ObtenerActividades()
        {
            return await _context.Actividades.ToListAsync();
        }

        public async Task ActualizarActividad(Actividad actividad)
        {
            _context.Actividades.Update(actividad);
            await _context.SaveChangesAsync();
        }

        public async Task EliminarActividad(int id)
        {
            var actividad = await _context.Actividades.FindAsync(id);
            if (actividad != null)
            {
                _context.Actividades.Remove(actividad);
                await _context.SaveChangesAsync();
            }
        }
    }
}