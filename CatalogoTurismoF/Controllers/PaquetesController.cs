using Microsoft.AspNetCore.Mvc;
using CatalogoTurismoF.Services;
using CatalogoTurismoF.Models;
using CatalogoTurismoF.Interfaces;

namespace CatalogoTurismoF.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaqueteController : ControllerBase
    {
        private readonly IPaqueteServices _paqueteService;

        public PaqueteController(IPaqueteServices paqueteService)
        {
            _paqueteService = paqueteService;
        }

        // Crear un nuevo paquete
        [HttpPost]
        public async Task<IActionResult> CrearPaquete([FromBody] Paquete paquete)
        {
            if (paquete == null)
                return BadRequest("El paquete no puede ser nulo.");

            await _paqueteService.CrearPaquete(paquete);
            return CreatedAtAction(nameof(BuscarPaquetePorNombre), new { nombre = paquete.NombrePaquete }, paquete);
        }

        // Buscar paquete por nombre
        [HttpGet("{nombre}")]
        public async Task<IActionResult> BuscarPaquetePorNombre(string nombre)
        {
            var paquete = await _paqueteService.BuscarPaquetePorNombre(nombre);
            if (paquete == null)
                return NotFound();

            return Ok(paquete);
        }

        // Obtener todos los paquetes
        [HttpGet]
        public async Task<IActionResult> ObtenerPaquetes()
        {
            var paquetes = await _paqueteService.ObtenerPaquetes();
            return Ok(paquetes);
        }

        // Actualizar un paquete
        [HttpPut("{id}")]
        public async Task<IActionResult> ActualizarPaquete(int id, [FromBody] Paquete paquete)
        {
            if (id != paquete.IdPaquete)
                return BadRequest("El ID del paquete no coincide.");

            await _paqueteService.ActualizarPaquete(paquete);
            return NoContent();
        }

        // Eliminar un paquete
        [HttpDelete("{id}")]
        public async Task<IActionResult> EliminarPaquete(int id)
        {
            await _paqueteService.EliminarPaquete(id);
            return NoContent();
        }
    }
}