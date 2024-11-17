using CatalogoTurismoF.Models;
using GraphQL.Types;

namespace CatalogoTurismoF.GraphQL_Types
{
    public class ActividadType : ObjectGraphType<Actividad>
    {
        public ActividadType()
        {
            Field(x => x.IdActividad).Description("El ID de la actividad");
            Field(x => x.NombreActividad).Description("El nombre de la actividad");
            Field(x => x.DescripcionActividad).Description("La descripción de la actividad");
            Field(x => x.Fecha).Description("La fecha de la actividad");
            Field(x => x.Lugar).Description("El lugar de la actividad");
            Field(x => x.Categoria).Description("La categoría de la actividad");
        }
    }
}
