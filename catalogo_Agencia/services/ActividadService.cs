using catalogo_Agencia.Data;
using catalogo_Agencia.Models;
using System.Collections.Generic;
using System.Linq;

namespace catalogo_Agencia.Services
{
    public class ActividadService
    {
        private readonly CatalogoContext _context;

        public ActividadService(CatalogoContext context)
        {
            _context = context;
        }

        public IEnumerable<Actividad> GetAllActividades()
        {
            return _context.Actividades.ToList();
        }

        public Actividad GetActividadById(int id)
        {
            return _context.Actividades.Find(id);
        }

        public void AddActividad(Actividad actividad)
        {
            _context.Actividades.Add(actividad);
            _context.SaveChanges();
        }

        public void UpdateActividad(Actividad actividad)
        {
            _context.Actividades.Update(actividad);
            _context.SaveChanges();
        }

        public void DeleteActividad(int id)
        {
            var actividad = _context.Actividades.Find(id);
            if (actividad != null)
            {
                _context.Actividades.Remove(actividad);
                _context.SaveChanges();
            }
        }
    }
}
