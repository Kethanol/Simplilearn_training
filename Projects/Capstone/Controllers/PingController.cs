using Microsoft.AspNetCore.Mvc;

namespace Capstone_Project.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PingController : Controller
    {
        [HttpGet]
        public IActionResult CheckHealth()
        {
            return Ok($"Ping successful. The system time is {DateTime.Now:h:mm:ss tt}");
        }
    }
}
