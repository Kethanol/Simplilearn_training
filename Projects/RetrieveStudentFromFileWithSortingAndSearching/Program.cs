using BusinessLogic.SortingAndSearching;
using BusinessLogic.Entities;
using System;
using System.Collections.Generic;
using System.IO;

namespace RetrieveStudentFromFile
{
    internal class Program
    {
        static IEnumerable<Student> SortAndReturn(List<Student> students)
        {
            var studentSorter = new StudentSorter(students);
            studentSorter.DoBubble();

            return studentSorter.Inner;
        }

        static void DisplayStudents(IEnumerable<Student> students)
        {
            foreach (var student in students)
            {
                Console.WriteLine($"The student's name is {student.Name}, they are {student.Age} years old and they are attending {student.Class}");
            }
        }

        // TODO -- better logic organization
        // TODO -- replace funny values
        // TODO -- selection enum
        // TODO -- after submitting -- generic logic

        static IEnumerable<Student> ReadAndProcessText(string path)
        {
            var students = File.ReadAllLines(path);
            List<Student> studentList = new List<Student>();

            foreach (var student in students)
            {
                var studentData = student.Split(',');
                studentList.Add(new Student { Name = studentData[0], Age = Convert.ToInt32(studentData[1]), Class = studentData[2] });
            }

            var sortedStudents = SortAndReturn(studentList);

            DisplayStudents(sortedStudents);

            return sortedStudents;
        }

        static void ShowMenu(IEnumerable<Student> studentList)
        {
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
                        var studentSearcher = new StudentSearcher(studentList);

                        Console.WriteLine("\nEnter the name:");
                        var name = Console.ReadLine();

                        var foundStudents = studentSearcher.DoBy(name);
                        DisplayStudents(foundStudents);
                        break;

                    case "2":
                        DisplayStudents(studentList);
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

            var students = ReadAndProcessText(path);
            ShowMenu(students);
        }
    }
}
