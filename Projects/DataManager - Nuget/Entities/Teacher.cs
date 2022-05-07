using Entities.Abstractions;

namespace Entities
{
    public struct Teacher : IEntityType
    {
        public string Name { get; set; }
        public string ClassAndSection { get; set; }
        public EntityType EntityType { get; set; }
    }
}
