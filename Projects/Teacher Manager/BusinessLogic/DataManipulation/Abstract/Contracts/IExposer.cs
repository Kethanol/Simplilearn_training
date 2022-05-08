using System.Collections.Generic;

namespace BusinessLogic.DataManipulation.Abstract.Contracts
{
    public interface IExposer<T> where T : class
    {
        void ExposeSingle(T entity);
        void ExposeAll(List<T> entities);
    }
}
