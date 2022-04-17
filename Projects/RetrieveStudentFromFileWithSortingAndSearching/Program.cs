using BusinessLogic.SortingAndSearching;
using System;
using System.Collections.Generic;
using System.IO;
using Entities;
using DataAccess;
using Common;

namespace RetrieveStudentFromFile
{
    internal class Program
    {
        // TODO -- after submitting -- generic logic

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
