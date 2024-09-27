using System;
using Npgsql;

namespace catalogo_Agencia
{
    public static class DatabaseConnection
    {
        private static string connectionString = "Host=localhost;Port=5432;Username=postgres;karnal43;Database=catalog_turismo;";

        public static NpgsqlConnection GetConnection()
        {
            var connection = new NpgsqlConnection(connectionString);
            try
            {
                connection.Open();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"A ocurrido un error con la base de datos: {ex.Message}");
            }
            return connection;
        }
    }
}
