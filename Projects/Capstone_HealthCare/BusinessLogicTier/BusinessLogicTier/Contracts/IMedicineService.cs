using Entities.Entities;

namespace BusinessLogicTier.Contracts
{
    public interface IMedicineService
    {
        Task<IEnumerable<Medicine>> GetAllAsync();
        Task<Medicine> GetAsync(int id);
        Task AddMedicine(Medicine medicine);
        Task UpdateMedicine(Medicine medicine);
        Task DeleteMedicine(int id);
    }
}
