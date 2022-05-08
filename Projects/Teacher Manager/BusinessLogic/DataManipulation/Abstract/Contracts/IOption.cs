using System.Threading.Tasks;

namespace BusinessLogic.DataManipulation.Abstract
{
    public interface IOption
    {
        Task Add();
        void Retrieve();
        void RetrieveById(int id);
    }
}
