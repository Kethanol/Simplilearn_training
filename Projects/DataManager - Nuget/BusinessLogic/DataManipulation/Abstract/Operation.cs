using BusinessLogic.DataManipulation.Abstract;
using BusinessLogic.DataManipulation.Concrete;
using Common;
using System;

namespace Entities.DataManipulation
{
    public abstract class Operation
    {
        private IConcreteOperation _concreteOperation;

        public abstract void ExecuteOperation(IConcreteOperation concreteOperation);

        public void Run() {

            Console.WriteLine(Constants.Menu.ENTITY_SELECT);

            Console.WriteLine(Constants.Entity.STUDENT);
            Console.WriteLine(Constants.Entity.TEACHER);
            Console.WriteLine(Constants.Entity.SUBJECT);
            Console.WriteLine();

            var entity = Console.ReadLine();
            Console.WriteLine();

            switch (entity)
            {
                case Constants.Entity.STUDENT:
                    _concreteOperation = StudentOperation.GetInstance();
                    break;

                case Constants.Entity.TEACHER:
                    _concreteOperation = TeacherOperation.GetInstance();
                    break;

                case Constants.Entity.SUBJECT:
                    _concreteOperation = SubjectOperation.GetInstance();
                    break;

                default:
                    break;
            }

            ExecuteOperation(_concreteOperation);
        }
    }
}
