﻿using BusinessLogicTier.Contracts;
using Entities.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Capstone_Project.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    // This will require administrator privileges, besides the basic authorization
    public class AdminController : Controller
    {
        private readonly IMedicineService _medicineService;

        public AdminController(IMedicineService medicineService)
        {
            _medicineService = medicineService;
        }

        [HttpGet]
        [Route("get-medicines")]
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
        [Route("get-medicine")]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetMedicine([FromQuery] int medicineId)
        {
            var medicine = await _medicineService.GetAsync(medicineId);
            return Ok(medicine);
        }

        [HttpPost]
        [Route("add-medicine")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> AddMedicine([FromBody] Medicine medicine)
        {
            await _medicineService.AddMedicine(medicine);
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
        [Route("delete-medicine/{medicineId}")]
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
