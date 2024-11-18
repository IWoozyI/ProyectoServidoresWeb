using CatalogoTurismoF.Context;
using CatalogoTurismoF.Interfaces;
using CatalogoTurismoF.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatalogoTurismoF.Services
{
    public class PaqueteService : IPaqueteServices
    {
        private readonly AppDbContext _context;

        public PaqueteService(AppDbContext context)
        {
            _context = context;
        }

        public async Task CrearPaquete(Paquete paquete)
        {
            await _context.Paquetes.AddAsync(paquete);
            await _context.SaveChangesAsync();
        }

        public async Task<Paquete?> BuscarPaquetePorNombre(string nombre)
        {
            return await _context.Paquetes.FirstOrDefaultAsync(p => p.NombrePaquete.Equals(nombre, StringComparison.OrdinalIgnoreCase));
        }

        public async Task<IEnumerable<Paquete>> ObtenerPaquetes()
        {
            return await _context.Paquetes.ToListAsync();
        }

        public async Task ActualizarPaquete(Paquete paquete)
        {
            _context.Paquetes.Update(paquete);
            await _context.SaveChangesAsync();
        }

        public async Task EliminarPaquete(int id)
        {
            var paquete = await _context.Paquetes.FindAsync(id);
            if (paquete != null)
            {
                _context.Paquetes.Remove(paquete);
                await _context.SaveChangesAsync();
            }
        }
    }
}