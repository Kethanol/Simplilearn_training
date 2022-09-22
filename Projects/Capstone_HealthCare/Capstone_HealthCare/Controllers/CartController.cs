using BusinessLogicTier.Contracts;
using Entities.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Capstone_Project.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    // This will require authorization in order to make the API secure
    public class CartController : Controller
    {
        private readonly ICartService _cartService;

        public CartController(ICartService cartService)
        {
            _cartService = cartService;
        }

        [HttpGet]
        [Route("get-by-user/{userId}")]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetUserCart([FromQuery] int userId)
        {
            var cart = await _cartService.GetUserCart(userId);
            return Ok(cart);
        }

        [HttpPost]
        [Route("{cartId}/add-medicine")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> AddMedicineToCart([FromBody] Medicine medicine, [FromQuery] int cartId)
        {
            await _cartService.AddMedicineToCart(medicine, cartId);
            return Ok();
        }

        [HttpPost]
        [Route("place-order")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> PlaceOrder([FromBody] Cart cart)
        {
            await _cartService.PlaceOrder(cart);
            return Ok();
        }
    }
}
