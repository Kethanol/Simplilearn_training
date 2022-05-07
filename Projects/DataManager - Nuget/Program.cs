using BusinessLogic.DataManipulation;
using BusinessLogic.DataManipulation.Abstract;
using Common;
using Executor;
using System;

namespace DataManager
{
    internal class Program
    {
        static void Main()
        {
            Manager manager = new Manager();
            // manager.Execute();

            // TODO -- integrate the logic in the manager
            // TODO -- maybe refactoring, the below code looks a little cluttered

            IAbstractOperation abstractOperation = null;

            bool isInMenu = true;

            while (isInMenu)
            {
                Console.WriteLine(Constants.Menu.OPTION_SELECT);
                Console.WriteLine(Constants.Menu.ADD);
                Console.WriteLine(Constants.Menu.RETRIEVE);
                Console.WriteLine(Constants.Menu.EXIT);

                var option = Console.ReadLine();
                Console.WriteLine();

                switch (option)
                {
                    case Constants.MenuChoices.ADD:
                        abstractOperation = new Adder();
                        break;

                    case Constants.MenuChoices.RETRIEVE:
                        abstractOperation = new Retriever();
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
