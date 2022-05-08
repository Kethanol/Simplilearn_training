using BusinessLogic.DataManipulation.Abstract;
using Common;
using System;

namespace BusinessLogic.DataManipulation
{
    public class RetrieverById : Operation, IAbstractOperation
    {
        public override void ExecuteOperation(IConcreteOperation concreteOperation)
        {
            Console.WriteLine(Constants.DataInsert.ID);   

            var option = Console.ReadLine();

            if (!int.TryParse(option, out var id))
                throw new ArgumentException("The id provided is not in the correct format!");

            concreteOperation.RetrieveById(id);
        }
    }
}
