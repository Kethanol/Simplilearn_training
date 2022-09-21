using Microsoft.AspNetCore.Mvc;

namespace Capstone_Project.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    // This will require authorization in order to make the API secure
    public class UserController : Controller
    {
        [HttpPost]
        [Route("sign-up")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult SignUp()
        {
            return Ok();
        }

        [HttpPost]
        [Route("sign-in")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult SignIn()
        {
            return Ok();
        }
    }
}
