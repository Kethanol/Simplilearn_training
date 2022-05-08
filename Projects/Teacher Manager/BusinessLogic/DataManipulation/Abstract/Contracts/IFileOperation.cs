using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BusinessLogic.DataManipulation.Abstract.Contracts
{
    public interface IFileOperation<T> where T : class
    {
        List<T> ReadFromFile(string path);
        Task WriteToFile(string path, T entity);
    }
}
