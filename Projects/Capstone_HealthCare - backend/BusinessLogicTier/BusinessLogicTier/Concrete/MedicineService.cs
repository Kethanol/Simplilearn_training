using BusinessLogicTier.Contracts;
using Entities.Entities;
using Microsoft.EntityFrameworkCore;
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

        public async Task<IEnumerable<Medicine?>> GetAsync(string medicineName)
        {
            var medicines = await _unitOfWork.MedicineRepository.GetManyByAsync(m => m.Name != null && EF.Functions.Like(m.Name.ToUpper(), medicineName.ToUpper()));
            return medicines ?? new List<Medicine?>();
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
