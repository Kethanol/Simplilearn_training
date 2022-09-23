using BusinessLogicTier.Contracts;
using Entities.Entities;
using Repository.Contracts;

namespace BusinessLogicTier.Concrete
{
    public class CartService : ICartService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CartService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<Cart> GetUserCart(int userId)
        {
            var cart = await _unitOfWork.CartRepository.GetSingleByAsync(cart => cart.User != null && cart.User.Id == userId);
            return cart;
        }

        public async Task AddMedicineToCart(int medicineId, int cartId)
        {
            var cartMedicine = new CartXMedicine()
            {
                CartId = cartId,
                MedicineId = medicineId
            };

            await _unitOfWork.CartMedicineRepository.InsertAsync(cartMedicine);
            await _unitOfWork.SaveChangesAsync();
        }


        public async Task PlaceOrder(Cart cart)
        {
            throw new NotImplementedException();
        }
    }
}
