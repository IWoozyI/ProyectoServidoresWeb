using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace CatalogoTurismoF.Models
{
    public class Actividad
    {
        [Key]

        [JsonIgnore]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]  
        public int IdActividad { get; set; }

        [Required]
        public required string NombreActividad { get; set; }

        public required string DescripcionActividad { get; set; }

        public required string Fecha { get; set; }

        public required string Lugar { get; set; }

        public required string Categoria { get; set; }

        [Required]
        public int PaqueteId { get; set; }
 
        [ForeignKey("PaqueteId")]
        public required Paquete Paquete { get; set; }
    }
}
