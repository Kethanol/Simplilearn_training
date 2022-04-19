using System;
using System.IO;
using Common;

namespace RetrieveStudentFromFile
{
    internal class Program
    {
        static void Main()
        {
            var path = $"{Directory.GetParent(AppContext.BaseDirectory).Parent.Parent.FullName}{Constants.File.PATH}";

            if (!File.Exists(path))
            {
                throw new FileNotFoundException(Constants.File.ERROR);
            }

            var students = Utils.ReadAndProcessText(path);
            Utils.ShowMenu(students);
        }
    }
}
