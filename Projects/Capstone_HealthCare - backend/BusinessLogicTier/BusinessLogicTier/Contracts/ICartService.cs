using Entities.Entities;

namespace BusinessLogicTier.Contracts
{
    public interface ICartService
    {
        Task<Cart> GetUserCart(int userId);
        Task AddMedicineToCart(int MedicineId, int cartId);
        Task PlaceOrder(Cart cart);
    }
}
