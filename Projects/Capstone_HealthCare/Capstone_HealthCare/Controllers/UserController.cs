using Entities.Entities;
using Microsoft.AspNetCore.Mvc;
using BusinessLogicTier.Contracts;

namespace Capstone_Project.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Route("sign-up")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> SignUp([FromBody] User user)
        {
            await _userService.SignUp(user);
            return Ok();
        }

        [HttpPost]
        [Route("sign-in")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult SignIn([FromBody] UserLogin loginInformation)
        {
            var token = _userService.SignIn(loginInformation);
            return Ok(token);
        }
    }
}
