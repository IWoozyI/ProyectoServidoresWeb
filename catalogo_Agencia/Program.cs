using System;
using System.Collections.Generic;
using data;

class Program
{
    static void Main()
    {
        var actividad1 = new Actividad
        {
            IdActividad = 1,
            Nombre = "Buceo",
            Descripcion = "Aventura bajo el agua",
            Duracion = "3 horas",
            Categoria = "Deportes",
            Lugar = "Playa"
        };

        var actividad2 = new Actividad
        {
            IdActividad = 2,
            Nombre = "Senderismo",
            Descripcion = "Exploración de montañas",
            Duracion = "5 horas",
            Categoria = "Aventura",
            Lugar = "Montaña"
        };

        var paquete1 = new Paquete
        {
            IdPaquete = 1,
            Nombre = "Aventura en la Playa",
            Descripcion = "Disfruta de actividades acuáticas",
            Precio = 300,
            Duracion = 3,
            FechaInicio = new DateTime(2024, 9, 1),
            FechaFin = new DateTime(2024, 9, 30),
            ActividadesIncluidas = new List<IActividad> { actividad1 },
            Cupo = 10,
            Ubicacion = "los frailes",
            Categoria = "Deportes"
        };

        var paquete2 = new Paquete
        {
            IdPaquete = 2,
            Nombre = "Aventura en las Montañas",
            Descripcion = "Explora hermosas montañas",
            Precio = 400,
            Duracion = 5,
            FechaInicio = new DateTime(2024, 9, 1),
            FechaFin = new DateTime(2024, 9, 30),
            ActividadesIncluidas = new List<IActividad> { actividad2 },
            Cupo = 8,
            Ubicacion = "Huanajuato",
            Categoria = "Aventura"
        };

        var catalogo = new RegistroCatalogo();
        catalogo.CrearPaquete(paquete1);
        catalogo.CrearPaquete(paquete2);

        var paquetesEnPlaya = catalogo.ConsultarPaquete("los frailes");

        foreach (var paquete in paquetesEnPlaya)
        {
            Console.WriteLine($"Paquete encontrado: {paquete.Nombre}, Precio: {paquete.Precio}");
        }

        var recomendador = new RecomendacionPaquetes(new List<IPaquete> { paquete1, paquete2 });
        var paquetesRecomendados = recomendador.RecomendacionDePaquetes("Deportes", "los frailes", new DateTime(2024, 9, 10));

        foreach (var paquete in paquetesRecomendados)
        {
            Console.WriteLine($"Paquete recomendado: {paquete.Nombre}, Fecha: {paquete.FechaInicio} - {paquete.FechaFin}");
        }
    }
}
