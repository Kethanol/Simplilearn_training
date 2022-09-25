namespace Entities.Entities
{
    public class Cart
    {
        public int Id { get; set; }
        public User? User { get; set; }
        public List<CartXMedicine>? CartXMedicines { get; set; }
    }
}
