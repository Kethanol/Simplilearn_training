using System.Collections;
using System.Collections.Generic;

namespace BusinessLogic.DataManipulation.Abstract.Contracts
{
    public interface IFileOperation<T> where T : class
    {
        List<T> ReadFromFile(string path);
        void WriteToFile(string path, T entity);
    }
}
