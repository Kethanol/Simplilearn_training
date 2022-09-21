using Repository.Contracts.Mapper;
using ENT = Entities.Entities;
using MOD = Repository.Models;

namespace Repository.Concrete.Mapper
{
    public class Mapper : IMapper
    {
        // This will be responsible with the DTO to entity mapping
        // I will not make it generic since I only have 3 entities and 3 DTOs

        public ENT.Medicine MapMedicine(MOD.Medicine? source)
        {
            return source == null ? new ENT.Medicine() : new ENT.Medicine()
            {
                Id = source.Id,
                Description = source.Description,
                SchemaOfTreatment = source.SchemaOfTreatment,
                MinimumAge = source.MinimumAge,
                Price = source.Price
            };
        }


        public ENT.User MapUser(MOD.User? source)
        {
            return new ENT.User()
            {

            };
        }

        public ENT.Cart MapCart(MOD.Cart? source)
        {
            return source == null ? new ENT.Cart() : new ENT.Cart()
            {
                Id = source.Id,
                MedicineList = MapMedicines(source.MedicineList),
                Owner = MapUser(source.Owner)
            };

        }

        public IEnumerable<ENT.Medicine> MapMedicines(IEnumerable<MOD.Medicine>? source)
        {
            return source == null ? new List<ENT.Medicine>() : source.Select(medicine =>
             {
                    return MapMedicine(medicine);
             });

        }
    }
}
