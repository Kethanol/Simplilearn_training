using Entities.Entities;

namespace BusinessLogicTier.Models
{
    public class CartModel
    {
        public int Id { get; set; }
        public List<MedicineModel>? CartMedicines { get; set; }
    }
}
