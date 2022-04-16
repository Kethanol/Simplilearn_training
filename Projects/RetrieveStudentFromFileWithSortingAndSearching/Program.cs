using BusinessLogic.SortingAndSearching;
using System;
using System.Collections.Generic;
using System.IO;

namespace RetrieveStudentFromFile
{
    internal class Program
    {
        static IEnumerable<string> SortAndReturnStudents(string[] students)
        {
            var studentSorter = new Sorter(students);
            studentSorter.DoBubble();

            return studentSorter.Inner;
        }

        static void DisplayStudents(IEnumerable<string> students)
        {
            foreach (var student in students)
            {
                var studentData = student.Split(',');
                Console.WriteLine($"The student's name is {studentData[0]}, they are {studentData[1]} years old and they are attending {studentData[2]}");
            }
        }

        // TODO -- better logic organization
        // TODO -- replace funny values
        // TODO -- selection enum
        // TODO -- after submitting -- generic logic

        static void ReadAndProcessText(string path)
        {
            var students = File.ReadAllLines(path);
            var sortedStudents = SortAndReturnStudents(students);

            DisplayStudents(sortedStudents);

            bool inMenu = true;

            while (inMenu)
            {
                Console.WriteLine("\nSelect an option:");
                Console.WriteLine("\n1. Search a student by name");
                Console.WriteLine("2. Show all");
                Console.WriteLine("3. Exit");

                var option = Console.ReadLine();

                switch (option)
                {
                    case "1":
                        var studentSearcher = new Searcher(students);

                        Console.WriteLine("\nEnter the name:");
                        var name = Console.ReadLine();

                        var foundStudents = studentSearcher.DoBy(name);
                        DisplayStudents(foundStudents);
                        break;

                    case "2":
                        DisplayStudents(sortedStudents);
                        break;

                    case "3":
                        inMenu = false;
                        break;

                    default:
                        Console.WriteLine("Invalid choice!");
                        break;
                }
            }

        }

        static void Main(string[] args)
        {
            var path = $"{Directory.GetParent(AppContext.BaseDirectory).Parent.Parent.FullName}{Constants.File.PATH}";

            if (!File.Exists(path))
            {
                throw new FileNotFoundException(Constants.File.ERROR);
            }

            ReadAndProcessText(path);

        }
    }
}
