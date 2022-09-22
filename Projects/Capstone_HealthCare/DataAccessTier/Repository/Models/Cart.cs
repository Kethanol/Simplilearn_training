namespace Repository.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public User? Owner { get; set; }
        public List<CartXMedicine>? CartXMedicines { get; set; }
    }
}
