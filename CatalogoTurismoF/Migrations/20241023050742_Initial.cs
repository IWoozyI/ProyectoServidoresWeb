using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CatalogoTurismoF.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Paquetes",
                columns: table => new
                {
                    IdPaquete = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NombrePaquete = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DescripcionPaquete = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PrecioTotal = table.Column<int>(type: "int", nullable: false),
                    DuracionTotal = table.Column<int>(type: "int", nullable: false),
                    FechaInicio = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaFin = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cupo = table.Column<int>(type: "int", nullable: false),
                    Ubicacion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Categoria = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Paquetes", x => x.IdPaquete);
                });

            migrationBuilder.CreateTable(
                name: "Actividades",
                columns: table => new
                {
                    IdActividad = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NombreActividad = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DescripcionActividad = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Fecha = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Lugar = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Categoria = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PaqueteId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Actividades", x => x.IdActividad);
                    table.ForeignKey(
                        name: "FK_Actividades_Paquetes_PaqueteId",
                        column: x => x.PaqueteId,
                        principalTable: "Paquetes",
                        principalColumn: "IdPaquete",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Actividades_PaqueteId",
                table: "Actividades",
                column: "PaqueteId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Actividades");

            migrationBuilder.DropTable(
                name: "Paquetes");
        }
    }
}
