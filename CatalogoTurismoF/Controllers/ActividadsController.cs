using Microsoft.AspNetCore.Mvc;
using CatalogoTurismoF.Models;
using CatalogoTurismoF.Services;
using CatalogoTurismoF.Interfaces;

namespace CatalogoTurismoF.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActividadController : ControllerBase
    {
        private readonly IActividadServices _actividadService;

        public ActividadController(IActividadServices actividadService)
        {
            _actividadService = actividadService;
        }

        // Crear una nueva actividad
        [HttpPost]
        public async Task<IActionResult> CrearActividad([FromBody] Actividad actividad)
        {
            if (actividad == null)
                return BadRequest("La actividad no puede ser nula.");

            await _actividadService.CrearActividad(actividad);
            return CreatedAtAction(nameof(BuscarActividadPorNombre), new { nombre = actividad.NombreActividad }, actividad);
        }

        // Buscar actividad por nombre
        [HttpGet("{nombre}")]
        public async Task<IActionResult> BuscarActividadPorNombre(string nombre)
        {
            var actividad = await _actividadService.BuscarActividadPorNombre(nombre);
            if (actividad == null)
                return NotFound();

            return Ok(actividad);
        }

        // Obtener todas las actividades
        [HttpGet]
        public async Task<IActionResult> ObtenerActividades()
        {
            var actividades = await _actividadService.ObtenerActividades();
            return Ok(actividades);
        }

        // Actualizar una actividad
        [HttpPut("{id}")]
        public async Task<IActionResult> ActualizarActividad(int id, [FromBody] Actividad actividad)
        {
            if (id != actividad.IdActividad)
                return BadRequest("El ID de la actividad no coincide.");

            await _actividadService.ActualizarActividad(actividad);
            return NoContent();
        }

        // Eliminar una actividad
        [HttpDelete("{id}")]
        public async Task<IActionResult> EliminarActividad(int id)
        {
            await _actividadService.EliminarActividad(id);
            return NoContent();
        }
    }
}