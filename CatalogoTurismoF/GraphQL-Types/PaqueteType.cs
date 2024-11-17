using CatalogoTurismoF.Models;
using GraphQL.Types;

namespace CatalogoTurismoF.GraphQL_Types
{
    public class PaqueteType : ObjectGraphType<Paquete>
    {
        public PaqueteType()
        {
            Field(x => x.IdPaquete).Description("El ID del paquete");
            Field(x => x.NombrePaquete).Description("El nombre del paquete");
            Field(x => x.DescripcionPaquete).Description("La descripción del paquete");
            Field(x => x.PrecioTotal).Description("El precio total del paquete");
            Field(x => x.DuracionTotal).Description("La duración total del paquete en días");
            Field<ListGraphType<ActividadType>>(
                "actividades",
                resolve: context => context.Source.Actividades
            );
        }
    }
}