namespace Entities.Entities
{
    public class Cart
    {
        public int Id { get; set; }
        public User? Owner { get; set; }
        public IEnumerable<Medicine>? MedicineList { get; set; }
    }
}
