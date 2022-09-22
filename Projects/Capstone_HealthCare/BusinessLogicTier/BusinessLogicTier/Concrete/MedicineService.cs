using BusinessLogicTier.Contracts;
using Entities.Entities;
using Repository.Contracts;

namespace BusinessLogicTier.Concrete
{
    public class MedicineService : IMedicineService
    {
        private readonly IUnitOfWork _unitOfWork;

        public MedicineService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<Medicine>> GetAllAsync()
        {
            return await _unitOfWork.MedicineRepository.GetAllAsync();
        }

        public async Task<Medicine> GetAsync(int id)
        {
            var medicine = await _unitOfWork.MedicineRepository.GetAsync(id);
            return medicine ?? new Medicine(); // Exception handling -- TO DO
            // TO DO -- A GET BY MEDICINE NAME
        }

        public async Task AddMedicine(Medicine medicine)
        {
            await _unitOfWork.MedicineRepository.InsertAsync(medicine);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task UpdateMedicine(Medicine medicine)
        {
            _unitOfWork.MedicineRepository.Update(medicine);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task DeleteMedicine(int id)
        {
            await _unitOfWork.MedicineRepository.DeleteAsync(id);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}
