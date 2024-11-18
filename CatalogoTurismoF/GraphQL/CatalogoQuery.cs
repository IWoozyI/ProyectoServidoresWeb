using CatalogoTurismoF.Interfaces;
using CatalogoTurismoF.GraphQL_Types;
using GraphQL.Types;
using GraphQL;

namespace CatalogoTurismoF.GraphQL
{
    public class CatalogoQuery : ObjectGraphType
    {
        public CatalogoQuery(IActividadServices actividadService, IPaqueteServices paqueteService)
        {
            // Consulta para obtener todas las actividades
            Field<ListGraphType<ActividadType>>(
                "actividades",
                resolve: context => actividadService.ObtenerActividades()
            );

            // Consulta para obtener todos los paquetes
            Field<ListGraphType<PaqueteType>>(
                "paquetes",
                resolve: context => paqueteService.ObtenerPaquetes()
            );

            // Consulta para obtener una actividad por nombre
            Field<ActividadType>(
                "actividadPorNombre",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "nombre" }
                ),
                resolve: context =>
                {
                    var nombre = context.GetArgument<string>("nombre");
                    return actividadService.BuscarActividadPorNombre(nombre);
                }
            );

            // Consulta para obtener un paquete por nombre
            Field<PaqueteType>(
                "paquetePorNombre",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "nombre" }
                ),
                resolve: context =>
                {
                    var nombre = context.GetArgument<string>("nombre");
                    return paqueteService.BuscarPaquetePorNombre(nombre);
                }
            );
        }
    }
}
