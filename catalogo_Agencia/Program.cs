using catalogo_Agencia.Models;
using catalogo_Agencia.Services;
using catalogo_Agencia.Data;
using Microsoft.EntityFrameworkCore;

var optionsBuilder = new DbContextOptionsBuilder<CatalogoContext>();
optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Username=postgres;Password=karnal43;Database=catalogo_turismo"); 

bool salir = false;

using (var context = new CatalogoContext(optionsBuilder.Options))
{
    context.Database.Migrate();

    var actividadService = new ActividadService(context);
    var paqueteService = new PaqueteService(context);

    while (!salir)
    {
        Console.WriteLine("Menú de Gestión de Agencia de Viajes");
        Console.WriteLine("1. Ver todas las actividades");
        Console.WriteLine("2. Ver actividad por ID");
        Console.WriteLine("3. Crear nueva actividad");
        Console.WriteLine("4. Actualizar actividad");
        Console.WriteLine("5. Eliminar actividad");
        Console.WriteLine("6. Ver todos los paquetes");
        Console.WriteLine("7. Ver paquete por ID");
        Console.WriteLine("8. Crear nuevo paquete");
        Console.WriteLine("9. Actualizar paquete");
        Console.WriteLine("10. Eliminar paquete");
        Console.WriteLine("0. Salir");

        Console.Write("Selecciona una opción: ");
        var opcion = Console.ReadLine();

        try
        {
            switch (opcion)
            {
                case "1":
                
                    var actividades = actividadService.GetAllActividades();
                    foreach (var actividad in actividades)
                    {
                        Console.WriteLine($"ID: {actividad.Id}, Nombre: {actividad.Nombre}, Descripción: {actividad.Descripcion}");
                    }
                    break;
                case "2":
            
                    Console.Write("Ingresa el ID de la actividad: ");
                    if (int.TryParse(Console.ReadLine(), out var idActividad))
                    {
                        var actividadPorId = actividadService.GetActividadById(idActividad);
                        if (actividadPorId != null)
                        {
                            Console.WriteLine($"ID: {actividadPorId.Id}, Nombre: {actividadPorId.Nombre}, Descripción: {actividadPorId.Descripcion}");
                        }
                        else
                        {
                            Console.WriteLine("Actividad no encontrada.");
                        }
                    }
                    else
                    {
                        Console.WriteLine("ID inválido. Debe ser un número entero.");
                    }
                    break;
                case "3":
                
                    Console.Write("Ingresa el nombre de la actividad: ");
                    var nombreActividad = Console.ReadLine();
                    Console.Write("Ingresa la descripción: ");
                    var descripcionActividad = Console.ReadLine();
                    actividadService.AddActividad(new Actividad { Nombre = nombreActividad, Descripcion = descripcionActividad });
                    Console.WriteLine("Actividad creada.");
                    break;
                case "4":
                
                    Console.Write("Ingresa el ID de la actividad a actualizar: ");
                    if (int.TryParse(Console.ReadLine(), out var idActualizar))
                    {
                        var actividadActualizar = actividadService.GetActividadById(idActualizar);
                        if (actividadActualizar != null)
                        {
                            Console.Write("Ingresa el nuevo nombre de la actividad: ");
                            actividadActualizar.Nombre = Console.ReadLine();
                            Console.Write("Ingresa la nueva descripción: ");
                            actividadActualizar.Descripcion = Console.ReadLine();
                            actividadService.UpdateActividad(actividadActualizar);
                            Console.WriteLine("Actividad actualizada.");
                        }
                        else
                        {
                            Console.WriteLine("Actividad no encontrada.");
                        }
                    }
                    else
                    {
                        Console.WriteLine("ID inválido. Debe ser un número entero.");
                    }
                    break;
                case "5":
                
                    Console.Write("Ingresa el ID de la actividad a eliminar: ");
                    if (int.TryParse(Console.ReadLine(), out var idEliminar))
                    {
                        actividadService.DeleteActividad(idEliminar);
                        Console.WriteLine("Actividad eliminada.");
                    }
                    else
                    {
                        Console.WriteLine("ID inválido. Debe ser un número entero.");
                    }
                    break;
                case "6":
                
                    var paquetes = paqueteService.GetAllPaquetes();
                    foreach (var paquete in paquetes)
                    {
                        Console.WriteLine($"ID: {paquete.Id}, Nombre: {paquete.Nombre}, Descripción: {paquete.Descripcion}");
                    }
                    break;
                case "7":
                    
                    Console.Write("Ingresa el ID del paquete: ");
                    if (int.TryParse(Console.ReadLine(), out var idPaquete))
                    {
                        var paquetePorId = paqueteService.GetPaqueteById(idPaquete);
                        if (paquetePorId != null)
                        {
                            Console.WriteLine($"ID: {paquetePorId.Id}, Nombre: {paquetePorId.Nombre}, Descripción: {paquetePorId.Descripcion}");
                        }
                        else
                        {
                            Console.WriteLine("Paquete no encontrado.");
                        }
                    }
                    else
                    {
                        Console.WriteLine("ID inválido. Debe ser un número entero.");
                    }
                    break;
                case "8":
                    
                    Console.Write("Ingresa el nombre del paquete: ");
                    var nombrePaquete = Console.ReadLine();
                    Console.Write("Ingresa la descripción: ");
                    var descripcionPaquete = Console.ReadLine();
                    paqueteService.AddPaquete(new Paquete { Nombre = nombrePaquete, Descripcion = descripcionPaquete });
                    Console.WriteLine("Paquete creado.");
                    break;
                case "9":
                    
                    Console.Write("Ingresa el ID del paquete a actualizar: ");
                    if (int.TryParse(Console.ReadLine(), out var idPaqueteActualizar))
                    {
                        var paqueteActualizar = paqueteService.GetPaqueteById(idPaqueteActualizar);
                        if (paqueteActualizar != null)
                        {
                            Console.Write("Ingresa el nuevo nombre del paquete: ");
                            paqueteActualizar.Nombre = Console.ReadLine();
                            Console.Write("Ingresa la nueva descripción: ");
                            paqueteActualizar.Descripcion = Console.ReadLine();
                            paqueteService.UpdatePaquete(paqueteActualizar);
                            Console.WriteLine("Paquete actualizado.");
                        }
                        else
                        {
                            Console.WriteLine("Paquete no encontrado.");
                        }
                    }
                    else
                    {
                        Console.WriteLine("ID inválido. Debe ser un número entero.");
                    }
                    break;
                case "10":
                
                    Console.Write("Ingresa el ID del paquete a eliminar: ");
                    if (int.TryParse(Console.ReadLine(), out var idPaqueteEliminar))
                    {
                        paqueteService.DeletePaquete(idPaqueteEliminar);
                        Console.WriteLine("Paquete eliminado.");
                    }
                    else
                    {
                        Console.WriteLine("ID inválido. Debe ser un número entero.");
                    }
                    break;
                case "0":
                    salir = true;
                    break;
                default:
                    Console.WriteLine("Opción no válida.");
                    break;
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Ocurrió un error: {ex.Message}");
        }

        Console.WriteLine(); 
    }
}

Console.WriteLine("Gracias por usar la aplicación.");
