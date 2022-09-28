using BusinessLogicTier.Contracts;
using BusinessLogicTier.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Capstone_HealthCare.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    [Authorize]
    public class MedicineController: Controller
    {
        private readonly IMedicineService _medicineService;

        public MedicineController(IMedicineService medicineService)
        {
            _medicineService = medicineService;
        }

        [HttpGet]
        [Route("all")]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetAllMedicines()
        {
            var medicineList = await _medicineService.GetAllAsync();
            return Ok(medicineList);
        }

        [HttpGet]
        [Route("by-name")]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetMedicine([FromQuery] SearchQueryModel model)
        {
            var medicine = await _medicineService.GetAsync(model.MedicineName!);
            return Ok(medicine);
        }
    }
}
