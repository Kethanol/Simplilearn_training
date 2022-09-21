namespace Repository.Models
{
    public class Medicine
    {
        public int Id { get; init; }
        public string? Description { get; init; }
        public string? SchemaOfTreatment { get; init; }
        public int MinimumAge { get; init; }
        public decimal Price { get; init; }
    }
}
