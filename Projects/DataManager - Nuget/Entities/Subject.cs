using Entities.Abstractions;

namespace Entities
{
    public struct Subject : IEntityType
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public EntityType EntityType { get; set; }
    }
}
