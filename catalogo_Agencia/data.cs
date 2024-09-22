using System;
using System.Collections.Generic;

namespace data
{
    public interface IPaquete
    {
        int IdPaquete { get; set; }
        string Nombre { get; set; }
        string Descripcion { get; set; }
        int Precio { get; set; }
        int Duracion { get; set; }
        DateTime FechaInicio { get; set; }
        DateTime FechaFin { get; set; }
        List<IActividad> ActividadesIncluidas { get; set; }
        int Cupo { get; set; }
        string Ubicacion { get; set; }
        string Categoria { get; set; }
    }

    public interface IActividad
    {
        int IdActividad { get; set; }
        string Nombre { get; set; }
        string Descripcion { get; set; }
        string Duracion { get; set; }
        string Categoria { get; set; }
        string Lugar { get; set; }
    }

    public interface ICatalogo
    {
        bool CrearPaquete(IPaquete paquete);
        bool ActualizarPaquete(int idPaquete, IPaquete paqueteModificado);
        List<IPaquete> ConsultarPaquete(string ubicacion, string nombre);
        bool EliminarPaquete(int idPaquete);
    }

    public interface IRecomendacion
    {
        List<IPaquete> RecomendacionDePaquetes(string categoria, string ubicacion, DateTime fecha);
    }

    public class Paquete : IPaquete
    {
        public int IdPaquete { get; set; }
        public string Nombre { get; set; } = string.Empty; // Inicialización
        public string Descripcion { get; set; } = string.Empty; // Inicialización
        public int Precio { get; set; }
        public int Duracion { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public List<IActividad> ActividadesIncluidas { get; set; } = new List<IActividad>(); // Inicialización
        public int Cupo { get; set; }
        public string Ubicacion { get; set; } = string.Empty; // Inicialización
        public string Categoria { get; set; } = string.Empty; // Inicialización
    }

    public class Actividad : IActividad
    {
        public int IdActividad { get; set; }
        public string Nombre { get; set; } = string.Empty; // Inicialización
        public string Descripcion { get; set; } = string.Empty; // Inicialización
        public string Duracion { get; set; } = string.Empty; // Inicialización
        public string Categoria { get; set; } = string.Empty; // Inicialización
        public string Lugar { get; set; } = string.Empty; // Inicialización
    }

    public class RegistroCatalogo : ICatalogo
    {
        private List<IPaquete> paquetes = new List<IPaquete>();

        public bool CrearPaquete(IPaquete paquete)
        {
            paquetes.Add(paquete);
            return true;
        }

        public bool ActualizarPaquete(int idPaquete, IPaquete paqueteModificado)
        {
            var paquete = paquetes.Find(p => p.IdPaquete == idPaquete);
            if (paquete != null)
            {
                paquetes.Remove(paquete);
                paquetes.Add(paqueteModificado);
                return true;
            }
            return false;
        }

        public List<IPaquete> ConsultarPaquete(string ubicacion, string? nombre = null)
        {
            return paquetes.FindAll(p => (ubicacion == null || p.Ubicacion == ubicacion) &&
            (nombre == null || p.Nombre == nombre));
        }

        public bool EliminarPaquete(int idPaquete)
        {
            var paquete = paquetes.Find(p => p.IdPaquete == idPaquete);
            if (paquete != null)
            {
                paquetes.Remove(paquete);
                return true;
            }
            return false;
        }
    }

    public class RecomendacionPaquetes : IRecomendacion
    {
        private List<IPaquete> paquetes;

        public RecomendacionPaquetes(List<IPaquete> paquetes)
        {
            this.paquetes = paquetes;
        }

        public List<IPaquete> RecomendacionDePaquetes(string categoria, string ubicacion, DateTime fecha)
        {
            return paquetes.FindAll(p => p.Categoria == categoria && p.Ubicacion == ubicacion && p.FechaInicio <= fecha && p.FechaFin >= fecha);
        }
    }
}