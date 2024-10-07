using Microsoft.AspNetCore.Mvc;
using catalogo_Agencia.Models;
using catalogo_Agencia.Services;
using System.Collections.Generic;

namespace catalogo_Agencia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActividadController : ControllerBase
    {
        private readonly ActividadService _actividadService;

        public ActividadController(ActividadService actividadService)
        {
            _actividadService = actividadService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Actividad>> GetActividades()
        {
            return Ok(_actividadService.GetAllActividades());
        }

        [HttpGet("{id}")]
        public ActionResult<Actividad> GetActividad(int id)
        {
            var actividad = _actividadService.GetActividadById(id);
            if (actividad == null)
            {
                return NotFound();
            }
            return Ok(actividad);
        }

        [HttpPost]
        public ActionResult<Actividad> PostActividad(Actividad actividad)
        {
            _actividadService.AddActividad(actividad);
            return CreatedAtAction(nameof(GetActividad), new { id = actividad.Id }, actividad);
        }

        [HttpPut("{id}")]
        public IActionResult PutActividad(int id, Actividad actividad)
        {
            if (id != actividad.Id)
            {
                return BadRequest();
            }
            _actividadService.UpdateActividad(actividad);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteActividad(int id)
        {
            _actividadService.DeleteActividad(id);
            return NoContent();
        }
    }
}
