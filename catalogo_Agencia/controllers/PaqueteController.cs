using Microsoft.AspNetCore.Mvc;
using catalogo_Agencia.Models;
using catalogo_Agencia.Services;
using System.Collections.Generic;

namespace catalogo_Agencia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaqueteController : ControllerBase
    {
        private readonly PaqueteService _paqueteService;

        public PaqueteController(PaqueteService paqueteService)
        {
            _paqueteService = paqueteService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Paquete>> GetPaquetes()
        {
            return Ok(_paqueteService.GetAllPaquetes());
        }

        [HttpGet("{id}")]
        public ActionResult<Paquete> GetPaquete(int id)
        {
            var paquete = _paqueteService.GetPaqueteById(id);
            if (paquete == null)
            {
                return NotFound();
            }
            return Ok(paquete);
        }

        [HttpPost]
        public ActionResult<Paquete> PostPaquete(Paquete paquete)
        {
            _paqueteService.AddPaquete(paquete);
            return CreatedAtAction(nameof(GetPaquete), new { id = paquete.Id }, paquete);
        }

        [HttpPut("{id}")]
        public IActionResult PutPaquete(int id, Paquete paquete)
        {
            if (id != paquete.Id)
            {
                return BadRequest();
            }
            _paqueteService.UpdatePaquete(paquete);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePaquete(int id)
        {
            _paqueteService.DeletePaquete(id);
            return NoContent();
        }
    }
}
