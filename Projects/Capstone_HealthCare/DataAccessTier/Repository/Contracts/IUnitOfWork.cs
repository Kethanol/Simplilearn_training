using Entities.Entities;
using Repository.Concrete;

namespace Repository.Contracts
{
    public interface IUnitOfWork
    {
        Task SaveChangesAsync();
        GenericRepository<Medicine> MedicineRepository { get; }
        GenericRepository<User> UserRepository { get; }
        GenericRepository<Cart> CartRepository { get; }
        GenericRepository<CartXMedicine> CartMedicineRepository { get; }
    }
}
