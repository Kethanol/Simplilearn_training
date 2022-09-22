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
            var cart = await _unitOfWork.CartRepository.GetByAsync(cart => cart.Owner != null && cart.Owner.Id == userId);
            return cart;
        }

        public async Task AddMedicineToCart(Medicine medicine, int cartId)
        {
            //var cart = await _unitOfWork.CartRepository.GetAsync(cartId);
            //cart.MedicineList ??= new List<Medicine>(); // TODO -- exception handling

            //cart.MedicineList.Add(medicine);

            //_unitOfWork.CartRepository.Update(cart);

            //await _unitOfWork.SaveChangesAsync();
        }


        public async Task PlaceOrder(Cart cart)
        {
            throw new NotImplementedException();
        }
    }
}
