using Entities.Abstractions;

namespace Entities
{
    public struct Student : IEntityType
    {
        public string Name { get; set; }
        public string ClassAndSection { get; set; }
        public EntityType EntityType { get; set; }
    }
}
