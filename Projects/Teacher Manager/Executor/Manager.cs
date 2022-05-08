using BusinessLogic.DataManipulation;
using BusinessLogic.DataManipulation.Abstract;
using Common;
using System;

namespace Executor
{
    public class Manager
    {
        private IAbstractOperation abstractOperation;

        public void Execute()
        {
            bool isInMenu = true;

            while (isInMenu)
            {
                Console.WriteLine(Constants.Menu.OPTION_SELECT);
                Console.WriteLine(Constants.Menu.ADD);
                Console.WriteLine(Constants.Menu.RETRIEVE_ALL);
                Console.WriteLine(Constants.Menu.RETRIEVE_BY_ID);
                Console.WriteLine(Constants.Menu.EXIT);

                var option = Console.ReadLine();
                Console.WriteLine();

                switch (option)
                {
                    case Constants.MenuChoices.ADD:
                        abstractOperation = new Adder();
                        break;

                    case Constants.MenuChoices.RETRIEVE_ALL:
                        abstractOperation = new Retriever();
                        break;

                    case Constants.MenuChoices.RETRIEVE_BY_ID:
                        abstractOperation = new RetrieverById();
                        break;

                    case Constants.MenuChoices.EXIT:
                        abstractOperation = null;
                        isInMenu = false;
                        break;

                    default:
                        Console.WriteLine(Constants.Menu.INVALID);
                        break;
                }

                if (abstractOperation != null) abstractOperation.Run();
            }
        }
    }
}
