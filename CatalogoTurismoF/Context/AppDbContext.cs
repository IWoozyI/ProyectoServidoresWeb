using CatalogoTurismoF.Models;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore;

namespace CatalogoTurismoF.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Paquete> Paquetes { get; set; }
        public DbSet<Actividad> Actividades { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configuracion relación entre Paquete y Actividad
            modelBuilder.Entity<Actividad>()
                .HasOne(a => a.Paquete)          // Una Actividad pertenece a un Paquete
                .WithMany(p => p.Actividades)    // Un Paquete tiene muchas Actividades
                .HasForeignKey(a => a.PaqueteId) // Especifica la clave foránea
                .OnDelete(DeleteBehavior.Cascade); // Al eliminar un Paquete, también elimina sus Actividades

           
        }
    }
}
