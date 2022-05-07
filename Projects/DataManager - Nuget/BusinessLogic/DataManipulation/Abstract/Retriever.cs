using BusinessLogic.DataManipulation.Abstract;
using Entities.DataManipulation;

namespace BusinessLogic.DataManipulation
{
    public class Retriever : Operation, IAbstractOperation
    {
        public override void ExecuteOperation(IConcreteOperation concreteOperation)
        {
            concreteOperation.Retrieve();
        }
    }
}
