//using Microsoft.EntityFrameworkCore;
//using CatalogoTurismoF.Context;
//using CatalogoTurismoF.Services;
//using CatalogoTurismoF.Interfaces;

//var builder = WebApplication.CreateBuilder(args);

////conexion base de datos. 
//var connectionString = builder.Configuration.GetConnectionString("Conexion");
////servicio a la base.
//builder.Services.AddDbContext<AppDbContext>(options =>options.UseSqlServer(connectionString));

//// Registro de servicios.
//builder.Services.AddScoped<IPaqueteServices, PaqueteService>();
//builder.Services.AddScoped<IActividadServices, ActividadService>(); 

//// Add services to the container.

//builder.Services.AddControllers();
//// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

//var app = builder.Build();

//// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

//app.UseHttpsRedirection();

//app.UseAuthorization();

//app.MapControllers();

//app.Run();

using Microsoft.EntityFrameworkCore;
using CatalogoTurismoF.Context;
using CatalogoTurismoF.Services;
using CatalogoTurismoF.Interfaces;
using CatalogoTurismoF.GraphQL;
using CatalogoTurismoF.GraphQL_Types;
using GraphQL.Server;
using GraphQL.SystemTextJson;
using GraphQL;

var builder = WebApplication.CreateBuilder(args);

// Conexión a la base de datos
var connectionString = builder.Configuration.GetConnectionString("Conexion");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(connectionString));

// Registro de servicios
builder.Services.AddScoped<IPaqueteServices, PaqueteService>();
builder.Services.AddScoped<IActividadServices, ActividadService>();

// Registro de GraphQL
builder.Services.AddScoped<CatalogoQuery>();
builder.Services.AddScoped<CatalogoSchema>();
builder.Services.AddScoped<ActividadType>();
builder.Services.AddScoped<PaqueteType>();

// Configuración de GraphQL (simplificada para 8.2.1)
builder.Services.AddGraphQL();

// Agregar controladores y Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configuración del middleware en el entorno de desarrollo
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Middleware de HTTPS y autorizaciones
app.UseHttpsRedirection();
app.UseAuthorization();

// Configuración del middleware para GraphQL
app.UseGraphQL<CatalogoSchema>("/graphql"); // Ruta para GraphQL
app.UseGraphQLPlayground("/graphql-playground"); // Interfaz para pruebas

// Mapeo de controladores
app.MapControllers();

app.Run();