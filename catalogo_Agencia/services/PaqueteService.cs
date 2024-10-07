using catalogo_Agencia.Data;
using catalogo_Agencia.Models;
using System.Collections.Generic;
using System.Linq;

namespace catalogo_Agencia.Services
{
    public class PaqueteService
    {
        private readonly CatalogoContext _context;

        public PaqueteService(CatalogoContext context)
        {
            _context = context;
        }

        public IEnumerable<Paquete> GetAllPaquetes()
        {
            return _context.Paquetes.ToList();
        }

        public Paquete GetPaqueteById(int id)
        {
            return _context.Paquetes.Find(id);
        }

        public void AddPaquete(Paquete paquete)
        {
            _context.Paquetes.Add(paquete);
            _context.SaveChanges();
        }

        public void UpdatePaquete(Paquete paquete)
        {
            _context.Paquetes.Update(paquete);
            _context.SaveChanges();
        }

        public void DeletePaquete(int id)
        {
            var paquete = _context.Paquetes.Find(id);
            if (paquete != null)
            {
                _context.Paquetes.Remove(paquete);
                _context.SaveChanges();
            }
        }
    }
}
