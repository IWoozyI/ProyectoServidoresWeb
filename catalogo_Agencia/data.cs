using System;
using System.Collections.Generic;
using Npgsql;

namespace Data
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
        List<IPaquete> ConsultarPaquete(string ubicacion, string? nombre = null);
        bool EliminarPaquete(int idPaquete);
    }

    public interface IRecomendacion
    {
        List<IPaquete> RecomendacionDePaquetes(string categoria, string ubicacion, DateTime fecha);
    }

    public class Paquete : IPaquete
    {
        public int IdPaquete { get; set; }
        public string Nombre { get; set; } = string.Empty; 
        public string Descripcion { get; set; } = string.Empty; 
        public int Precio { get; set; }
        public int Duracion { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public List<IActividad> ActividadesIncluidas { get; set; } = new List<IActividad>(); 
        public int Cupo { get; set; }
        public string Ubicacion { get; set; } = string.Empty; 
        public string Categoria { get; set; } = string.Empty; 
    }

    public class Actividad : IActividad
    {
        public int IdActividad { get; set; }
        public string Nombre { get; set; } = string.Empty; 
        public string Descripcion { get; set; } = string.Empty; 
        public string Duracion { get; set; } = string.Empty; 
        public string Categoria { get; set; } = string.Empty; 
        public string Lugar { get; set; } = string.Empty; 
    }

    public class RegistroCatalogo : ICatalogo
    {
        private string connectionString;

        public RegistroCatalogo(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public bool CrearPaquete(IPaquete paquete)
        {
            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();
                using (var command = new NpgsqlCommand("INSERT INTO paquetes (id_paquete, nombre, descripcion, precio, duracion, fecha_inicio, fecha_fin, cupo, ubicacion, categoria) VALUES (@IdPaquete, @Nombre, @Descripcion, @Precio, @Duracion, @FechaInicio, @FechaFin, @Cupo, @Ubicacion, @Categoria)", connection))
                {
                    command.Parameters.AddWithValue("IdPaquete", paquete.IdPaquete);
                    command.Parameters.AddWithValue("Nombre", paquete.Nombre);
                    command.Parameters.AddWithValue("Descripcion", paquete.Descripcion);
                    command.Parameters.AddWithValue("Precio", paquete.Precio);
                    command.Parameters.AddWithValue("Duracion", paquete.Duracion);
                    command.Parameters.AddWithValue("FechaInicio", paquete.FechaInicio);
                    command.Parameters.AddWithValue("FechaFin", paquete.FechaFin);
                    command.Parameters.AddWithValue("Cupo", paquete.Cupo);
                    command.Parameters.AddWithValue("Ubicacion", paquete.Ubicacion);
                    command.Parameters.AddWithValue("Categoria", paquete.Categoria);

                    command.ExecuteNonQuery();
                    return true;
                }
            }
        }

        public bool ActualizarPaquete(int idPaquete, IPaquete paqueteModificado)
        {
            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();
                using (var command = new NpgsqlCommand("UPDATE paquetes SET nombre = @Nombre, descripcion = @Descripcion, precio = @Precio, duracion = @Duracion, fecha_inicio = @FechaInicio, fecha_fin = @FechaFin, cupo = @Cupo, ubicacion = @Ubicacion, categoria = @Categoria WHERE id_paquete = @IdPaquete", connection))
                {
                    command.Parameters.AddWithValue("IdPaquete", idPaquete);
                    command.Parameters.AddWithValue("Nombre", paqueteModificado.Nombre);
                    command.Parameters.AddWithValue("Descripcion", paqueteModificado.Descripcion);
                    command.Parameters.AddWithValue("Precio", paqueteModificado.Precio);
                    command.Parameters.AddWithValue("Duracion", paqueteModificado.Duracion);
                    command.Parameters.AddWithValue("FechaInicio", paqueteModificado.FechaInicio);
                    command.Parameters.AddWithValue("FechaFin", paqueteModificado.FechaFin);
                    command.Parameters.AddWithValue("Cupo", paqueteModificado.Cupo);
                    command.Parameters.AddWithValue("Ubicacion", paqueteModificado.Ubicacion);
                    command.Parameters.AddWithValue("Categoria", paqueteModificado.Categoria);

                    var rowsAffected = command.ExecuteNonQuery();
                    return rowsAffected > 0;
                }
            }
        }

        public List<IPaquete> ConsultarPaquete(string ubicacion, string? nombre = null)
        {
            var paquetesEncontrados = new List<IPaquete>();
            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();
                using (var command = new NpgsqlCommand("SELECT * FROM paquetes WHERE ubicacion = @Ubicacion" + (nombre != null ? " AND nombre = @Nombre" : ""), connection))
                {
                    command.Parameters.AddWithValue("Ubicacion", ubicacion);
                    if (nombre != null)
                    {
                        command.Parameters.AddWithValue("Nombre", nombre);
                    }

                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            var paquete = new Paquete
                            {
                                IdPaquete = reader.GetInt32(0),
                                Nombre = reader.GetString(1),
                                Descripcion = reader.GetString(2),
                                Precio = reader.GetInt32(3),
                                Duracion = reader.GetInt32(4),
                                FechaInicio = reader.GetDateTime(5),
                                FechaFin = reader.GetDateTime(6),
                                Cupo = reader.GetInt32(7),
                                Ubicacion = reader.GetString(8),
                                Categoria = reader.GetString(9)
                            };
                            paquetesEncontrados.Add(paquete);
                        }
                    }
                }
            }
            return paquetesEncontrados;
        }

        public bool EliminarPaquete(int idPaquete)
        {
            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();
                using (var command = new NpgsqlCommand("DELETE FROM paquetes WHERE id_paquete = @IdPaquete", connection))
                {
                    command.Parameters.AddWithValue("IdPaquete", idPaquete);
                    var rowsAffected = command.ExecuteNonQuery();
                    return rowsAffected > 0; 
                }
            }
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
