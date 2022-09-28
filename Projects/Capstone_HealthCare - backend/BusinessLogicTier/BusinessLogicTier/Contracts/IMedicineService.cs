using Entities.Entities;

namespace BusinessLogicTier.Contracts
{
    public interface IMedicineService
    {
        Task<IEnumerable<Medicine>> GetAllAsync();
        Task<IEnumerable<Medicine?>> GetAsync(string name);
        Task AddMedicines(IEnumerable<Medicine> medicines);
        Task UpdateMedicine(Medicine medicine);
        Task DeleteMedicine(int id);
    }
}
