using BusinessLogic.DataManipulation.Abstract;
using Common;
using System;

namespace BusinessLogic.DataManipulation
{
    public class Adder : Operation, IAbstractOperation
    {
        public override void ExecuteOperation(IOption concreteOperation)
        {
            concreteOperation.Add();

            Console.WriteLine(Constants.Menu.ADDED);
        }
    }
}
