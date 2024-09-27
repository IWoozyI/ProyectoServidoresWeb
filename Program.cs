using System;
using System.Collections.Generic;
using data; 

class Program
{
    static void Main()
    {
        // conexion
        string connectionString = "Host=localhost;Port=5432;Username=postgres;Password=karnal43;Database=catalogo_turismo";

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

    
        var catalogo = new RegistroCatalogo(connectionString); 

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

        var paqueteModificado = new Paquete
        {
            IdPaquete = 1,
            Nombre = "Aventura en la Playa Actualizada",
            Descripcion = "Disfruta de actividades acuáticas con más opciones.",
            Precio = 380,
            Duracion = 3,
            FechaInicio = new DateTime(2024, 9, 1),
            FechaFin = new DateTime(2024, 9, 30),
            ActividadesIncluidas = new List<IActividad> { actividad1, actividad2 },
            Cupo = 12,
            Ubicacion = "los frailes",
            Categoria = "Deportes"
        };

        bool actualizado = catalogo.ActualizarPaquete(1, paqueteModificado);
        Console.WriteLine(actualizado ? "Paquete actualizado exitosamente." : "Error al actualizar el paquete.");

        bool eliminado = catalogo.EliminarPaquete(2);
        Console.WriteLine(eliminado ? "Paquete eliminado exitosamente." : "Error al eliminar el paquete.");
    }
}
