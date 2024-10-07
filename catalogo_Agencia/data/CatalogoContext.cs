using Microsoft.EntityFrameworkCore;
using catalogo_Agencia.Models;

namespace catalogo_Agencia.Data
{
    public class CatalogoContext : DbContext
    {
        public CatalogoContext(DbContextOptions<CatalogoContext> options) : base(options) { }

        public DbSet<Paquete> Paquetes { get; set; }
        public DbSet<Actividad> Actividades { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Paquete>()
                .ToTable("Paquetes")
                .HasKey(p => p.Id);

            modelBuilder.Entity<Actividad>()
                .ToTable("Actividades")
                .HasKey(a => a.Id);
        }
    }
}
