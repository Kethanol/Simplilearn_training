using System.Threading.Tasks;

namespace BusinessLogic.DataManipulation.Abstract
{
    public interface IConcreteOperation
    {
        Task Add();
        void Retrieve();
        void RetrieveById(int id);
    }
}
