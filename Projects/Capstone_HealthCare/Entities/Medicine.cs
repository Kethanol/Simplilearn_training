﻿namespace Entities.Entities
{
    public class Medicine
    {
        public int Id { get; set; }
        public string? Description { get; set; }
        public string? SchemaOfTreatment { get; set; }
        public int MinimumAge { get; set; }
        public decimal Price { get; set; }
    }
}