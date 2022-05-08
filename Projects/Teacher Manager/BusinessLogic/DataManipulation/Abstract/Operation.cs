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
            // Here we can write some general logic before choosing the instance that we use
            // We have just the Teacher entity for now, other entities may appear in the future

            _concreteOperation = TeacherOperation.GetInstance();

            ExecuteOperation(_concreteOperation);
        }
    }
}
