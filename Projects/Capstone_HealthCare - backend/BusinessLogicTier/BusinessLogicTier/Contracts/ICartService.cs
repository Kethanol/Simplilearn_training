using BusinessLogicTier.Models;
using Entities.Entities;

namespace BusinessLogicTier.Contracts
{
    public interface ICartService
    {
        Task<CartModel> GetUserCart(int userId);
        Task AddMedicineToCart(int MedicineId, int cartId);
        Task PlaceOrder(Cart cart);
    }
}
