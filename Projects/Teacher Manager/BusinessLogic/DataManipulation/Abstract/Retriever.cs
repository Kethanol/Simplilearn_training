using BusinessLogic.DataManipulation.Abstract;

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
