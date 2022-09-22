using Repository.Contracts.Mapper;
using ENT = Entities.Entities;
using MOD = Repository.Models;

namespace Repository.Concrete.Mapper
{
    public class Mapper : IMapper
    {
        // This will be responsible with the DTO to entity mapping

        public ENT.Medicine MapMedicine(MOD.Medicine? source)
        {
            return source == null ? new ENT.Medicine() : new ENT.Medicine()
            {
                Id = source.Id,
                Name = source.Name,
                Description = source.Description,
                SchemaOfTreatment = source.SchemaOfTreatment,
                MinimumAge = source.MinimumAge,
                Price = source.Price,
                CartXMedicines = MapCartXMedicines(source.CartXMedicines),
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
                CartXMedicines = MapCartXMedicines(source.CartXMedicines),
                Owner = MapUser(source.Owner)
            };

        }

        public ENT.CartXMedicine MapCartXMedicine(MOD.CartXMedicine? source)
        {
            return source == null ? new ENT.CartXMedicine() : new ENT.CartXMedicine()
            {
                CartId = source.CartId,
                MedicineId= source.MedicineId,
                Cart = MapCart(source.Cart),
                Medicine = MapMedicine(source.Medicine)
            };

        }

        public List<ENT.CartXMedicine> MapCartXMedicines(List<MOD.CartXMedicine> source)
        {
            return source == null ? new List<ENT.CartXMedicine>() : source.Select(cxm =>
             {
                 return MapCartXMedicine(cxm);
             }).ToList();
        }
    }
}
