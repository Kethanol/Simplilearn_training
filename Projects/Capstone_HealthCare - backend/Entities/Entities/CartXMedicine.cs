namespace Entities.Entities
{
    public class CartXMedicine
    {
        public int CartId { get; set; }
        public int MedicineId { get; set; }
        public Cart? Cart { get; set; }
        public Medicine? Medicine { get; set; }
        public int Quantity { get; set; }
    }
}
