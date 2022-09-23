using Entities.Entities;

namespace BusinessLogicTier.Contracts
{
    public interface IMedicineService
    {
        Task<IEnumerable<Medicine>> GetAllAsync();
        Task<IEnumerable<Medicine?>> GetAsync(string name);
        Task AddMedicine(Medicine medicine);
        Task UpdateMedicine(Medicine medicine);
        Task DeleteMedicine(int id);
    }
}
