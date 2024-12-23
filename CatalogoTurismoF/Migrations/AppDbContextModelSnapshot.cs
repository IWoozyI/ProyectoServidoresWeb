﻿// <auto-generated />
using CatalogoTurismoF.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace CatalogoTurismoF.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("CatalogoTurismoF.Models.Actividad", b =>
                {
                    b.Property<int>("IdActividad")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdActividad"));

                    b.Property<string>("Categoria")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DescripcionActividad")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fecha")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lugar")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NombreActividad")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PaqueteId")
                        .HasColumnType("int");

                    b.HasKey("IdActividad");

                    b.HasIndex("PaqueteId");

                    b.ToTable("Actividades");
                });

            modelBuilder.Entity("CatalogoTurismoF.Models.Paquete", b =>
                {
                    b.Property<int>("IdPaquete")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdPaquete"));

                    b.Property<string>("Categoria")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Cupo")
                        .HasColumnType("int");

                    b.Property<string>("DescripcionPaquete")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("DuracionTotal")
                        .HasColumnType("int");

                    b.Property<string>("FechaFin")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FechaInicio")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NombrePaquete")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PrecioTotal")
                        .HasColumnType("int");

                    b.Property<string>("Ubicacion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdPaquete");

                    b.ToTable("Paquetes");
                });

            modelBuilder.Entity("CatalogoTurismoF.Models.Actividad", b =>
                {
                    b.HasOne("CatalogoTurismoF.Models.Paquete", "Paquete")
                        .WithMany("Actividades")
                        .HasForeignKey("PaqueteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Paquete");
                });

            modelBuilder.Entity("CatalogoTurismoF.Models.Paquete", b =>
                {
                    b.Navigation("Actividades");
                });
#pragma warning restore 612, 618
        }
    }
}
