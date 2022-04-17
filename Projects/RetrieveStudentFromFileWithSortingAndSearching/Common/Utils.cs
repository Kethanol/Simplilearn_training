using BusinessLogic.SortingAndSearching;
using DataAccess;
using Entities;
using System;
using System.Collections.Generic;
using System.IO;

namespace Common
{
    public static class Utils
    {
        #region Private methods
        private static IEnumerable<Student> SortAndReturn(List<Student> students)
        {
            var studentSorter = new StudentSorter(students);
            studentSorter.DoBubble();

            return studentSorter.Inner;
        }

        private static void DisplayStudents(IEnumerable<Student> students)
        {
            foreach (var student in students)
            {
                Console.WriteLine($"The student's name is {student.Name}, they are {student.Age} years old and they are attending {student.Class}");
            }
        }
        #endregion

        #region Public methods
        public static IEnumerable<Student> ReadAndProcessText(string path)
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

        public static void ShowMenu(IEnumerable<Student> studentList)
        {
            bool inMenu = true;

            while (inMenu)
            {
                Console.WriteLine(Constants.Menu.OPTION_SELECT);
                Console.WriteLine(Constants.Menu.NAME_SEARCH);
                Console.WriteLine(Constants.Menu.ALL);
                Console.WriteLine(Constants.Menu.EXIT);

                var option = Console.ReadLine();

                switch (option)
                {
                    case Constants.MenuChoices.SEARCH:
                        var studentSearcher = new StudentSearcher(studentList);

                        Console.WriteLine(Constants.Menu.NAME_ENTER);
                        var name = Console.ReadLine();

                        var foundStudents = studentSearcher.DoBy(name);
                        DisplayStudents(foundStudents);
                        break;

                    case Constants.MenuChoices.ALL:
                        DisplayStudents(studentList);
                        break;

                    case Constants.MenuChoices.EXIT:
                        inMenu = false;
                        break;

                    default:
                        Console.WriteLine(Constants.Menu.INVALID);
                        break;
                }
            }
        }
        #endregion
    }
}
