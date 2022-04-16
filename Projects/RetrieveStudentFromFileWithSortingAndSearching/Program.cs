using BusinessLogic.SortingAndSearching;
using System;
using System.IO;

namespace RetrieveStudentFromFile
{
    internal class Program
    {
        static void ReadAndProcessText(string path) {
            var students = File.ReadAllLines(path);

            foreach (var student in students) {
                var studentData = student.Split(',');
                Console.WriteLine($"The student's name is {studentData[0]}, they are {studentData[1]} years old and they are attending {studentData[2]}");
            }
        }

        static void Main(string[] args)
        {
            var path = $"{Directory.GetParent(AppContext.BaseDirectory).Parent.Parent.FullName}{Constants.File.PATH}";

            if (!File.Exists(path)) {
                throw new FileNotFoundException(Constants.File.ERROR);
            }

            ReadAndProcessText(path);
        }
    }
}
