using Microsoft.AspNetCore.Mvc;

namespace Capstone_Project.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    // This will require authorization in order to make the API secure
    public class CartController : Controller
    {
        [HttpGet]
        [Route("get-by-user-id")]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetUserCart([FromQuery] int id)
        {
            return Ok(id);
        }

        [HttpPost]
        [Route("add-medicine")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult AddMedicineToCart()
        {
            return Ok();
        }

        [HttpPost]
        [Route("place-order")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult PlaceOrder()
        {
            return Ok();
        }
    }
}
