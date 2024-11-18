using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CatalogoTurismoF.Models
{
    public class Paquete
    {
        [Key]
        [JsonIgnore]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdPaquete { get; set; }

        [Required]
        public required string NombrePaquete { get; set; }

        public required string DescripcionPaquete { get; set; }

        public int PrecioTotal { get; set; }

        public int DuracionTotal { get; set; }

        public required string FechaInicio { get; set; }

        public required string FechaFin { get; set; }

        public int Cupo { get; set; }

        public required string Ubicacion { get; set; }

        public required string Categoria { get; set; }

        // Relación con Actividades 
        [JsonIgnore]
        public List<Actividad> Actividades { get; set; } = new List<Actividad>();
    }
}
