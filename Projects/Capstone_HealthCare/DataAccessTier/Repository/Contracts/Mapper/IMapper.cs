using ENT = Entities.Entities;
using MOD = Repository.Models;

namespace Repository.Contracts.Mapper
{
    public interface IMapper
    {
        ENT.Medicine MapMedicine(MOD.Medicine? source);
        ENT.Cart MapCart(MOD.Cart? source);
        ENT.User MapUser(MOD.User? source);
        List<ENT.Medicine?> MapMedicines(List<MOD.Medicine>? source);
    }
}
