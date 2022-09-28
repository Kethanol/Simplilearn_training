using BusinessLogicTier.Contracts;
using Entities.Constants;
using Entities.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Capstone_Project.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    [Authorize(Roles = Constants.Roles.ADMINISTRATOR)]
    public class AdminController : Controller
    {
        private readonly IMedicineService _medicineService;

        public AdminController(IMedicineService medicineService)
        {
            _medicineService = medicineService;
        }

        [HttpPost]
        [Route("add-medicines")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> AddMedicine([FromBody] IEnumerable<Medicine> medicines)
        {
            await _medicineService.AddMedicines(medicines);
            return Ok();
        }

        [HttpPut]
        [Route("update-medicine")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> UpdateMedicine([FromBody] Medicine medicine)
        {
            await _medicineService.UpdateMedicine(medicine);
            return Ok();
        }

        [HttpDelete]
        [Route("delete-medicine")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> DeleteMedicine([FromQuery] int medicineId)
        {
            await _medicineService.DeleteMedicine(medicineId);
            return Ok(medicineId);
        }
    }
}
