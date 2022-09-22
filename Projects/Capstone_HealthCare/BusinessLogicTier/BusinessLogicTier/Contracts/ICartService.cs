using Entities.Entities;

namespace BusinessLogicTier.Contracts
{
    public interface ICartService
    {
        Task<Cart> GetUserCart(int userId);
        Task AddMedicineToCart(Medicine medicine, int cartId);
        Task PlaceOrder(Cart cart);
    }
}
