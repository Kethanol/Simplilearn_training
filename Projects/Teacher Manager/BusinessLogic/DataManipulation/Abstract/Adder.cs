using BusinessLogic.DataManipulation.Abstract;
using Common;
using System;

namespace BusinessLogic.DataManipulation
{
    public class Adder : Operation, IAbstractOperation
    {
        public override void ExecuteOperation(IConcreteOperation concreteOperation)
        {
            concreteOperation.Add();

            Console.WriteLine(Constants.Menu.ADDED);
        }
    }
}
