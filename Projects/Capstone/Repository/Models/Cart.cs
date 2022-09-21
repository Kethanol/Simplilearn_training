namespace Repository.Models
{
    public class Cart
    {
        public int Id { get; init; }
        public User? Owner { get; init; }
        public IEnumerable<Medicine>? MedicineList { get; init; }
    }
}
