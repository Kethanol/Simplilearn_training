namespace Entities.Entities
{
    public class Cart
    {
        public int Id { get; set; }
        public User? Owner { get; set; }
        public List<Medicine>? MedicineList { get; set; }
    }
}
