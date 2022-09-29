using BusinessLogicTier.Contracts;
using BusinessLogicTier.Models;
using Entities.Entities;
using Microsoft.EntityFrameworkCore;
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

        public async Task<CartModel> GetUserCart(int userId)
        {
            var cart = (await _unitOfWork.CartRepository.GetByWithInclude(cart => cart.User != null && cart.User.Id == userId, cart => cart.Include(x => x.CartXMedicines!).ThenInclude(x => x.Medicine))).FirstOrDefault();

            var mappedCart = new CartModel()
            {
                Id = cart!.Id,
                CartMedicines = cart.CartXMedicines!.Select(cxm => new MedicineModel() {
                    Id = cxm.Medicine!.Id,
                    Name = cxm.Medicine.Name,
                    Description = cxm.Medicine.Description,
                    SchemaOfTreatment = cxm.Medicine.SchemaOfTreatment,
                    MinimumAge = cxm.Medicine.MinimumAge,
                    Price = cxm.Medicine.Price,
                    Quantity = cxm.Quantity
                }).ToList()
            };

            return mappedCart!;
        }

        public async Task AddMedicineToCart(int medicineId, int cartId)
        {
            var cartMedicine = new CartXMedicine()
            {
                CartId = cartId,
                MedicineId = medicineId,
                Quantity = 1
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
