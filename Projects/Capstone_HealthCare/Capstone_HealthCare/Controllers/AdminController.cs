using Microsoft.AspNetCore.Mvc;

namespace Capstone_Project.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    // This will require administrator privileges, besides the basic authorization
    public class AdminController : Controller
    {
        [HttpGet]
        [Route("get-medicines")]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetAllMedicines()
        {
            return Ok();
        }

        [HttpGet]
        [Route("get-medicine")]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetMedicine([FromQuery] int id)
        {
            return Ok(id);
        }

        [HttpPost]
        [Route("add-medicine")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult AddMedicine()
        {
            return Ok();
        }

        [HttpPut]
        [Route("update-medicine")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult UpdateMedicine()
        {
            return Ok();
        }

        [HttpDelete]
        [Route("delete-medicine")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult DeleteMedicine([FromQuery] int id)
        {
            return Ok(id);
        }
    }
}
