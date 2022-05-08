using BusinessLogic.DataManipulation.Abstract;
using BusinessLogic.DataManipulation.Concrete;

namespace BusinessLogic.DataManipulation
{
    public abstract class Operation
    {
        private IConcreteOperation _concreteOperation;

        public abstract void ExecuteOperation(IConcreteOperation concreteOperation);

        public void Run()
        {
            _concreteOperation = TeacherOperation.GetInstance();

            ExecuteOperation(_concreteOperation);
        }
    }
}
