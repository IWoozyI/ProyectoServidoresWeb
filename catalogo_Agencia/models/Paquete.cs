namespace catalogo_Agencia.Models
{
    public class Paquete
    {
        public int Id { get; set; }
        public string? Nombre { get; set; }
        public string? Descripcion { get; set; }
        public decimal PrecioTotal { get; set; }
        public int DuracionTotal { get; set; }
        public DateTime FechaInicio { get; set; } 
        public DateTime FechaFin { get; set; } 
        public int Cupo { get; set; } 
        public string? Ubicacion { get; set; } 
        public string? Categoria { get; set; }

        public ICollection<Actividad> Actividades { get; set; } = new List<Actividad>();

        public Paquete()
        {
            Actividades = new List<Actividad>(); 
        }
    }
}
