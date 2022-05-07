using Common;
using Entities;
using Executor;
using System;
using System.Collections.Generic;

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

            List<Student> students = new List<Student>();
            List<Teacher> teachers = new List<Teacher>();
            List<Subject> subjects = new List<Subject>();

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
                    case Constants.MenuChoices.RETRIEVE:
                        Console.WriteLine(Constants.Menu.ENTITY_SELECT);

                        Console.WriteLine(Constants.Entity.STUDENT);
                        Console.WriteLine(Constants.Entity.PROFESSOR);
                        Console.WriteLine(Constants.Entity.SUBJECT);
                        Console.WriteLine();

                        var entity = Console.ReadLine();
                        Console.WriteLine();

                        switch (entity)
                        {
                            case Constants.Entity.STUDENT:
                                if (option == Constants.MenuChoices.ADD)
                                {
                                    Console.WriteLine(Constants.DataInsert.NAME);

                                    var studentName = Console.ReadLine();
                                    Console.WriteLine();

                                    Console.WriteLine(Constants.DataInsert.CLASS_SECTION);

                                    var studentClass = Console.ReadLine();
                                    Console.WriteLine();

                                    students.Add(new Student() { Name = studentName, ClassAndSection = studentClass });

                                }
                                else
                                {
                                    foreach (var student in students)
                                        Console.WriteLine($"The student's name is {student.Name} and they are attenting {student.ClassAndSection}");
                                }

                                break;
                            case Constants.Entity.PROFESSOR:
                                if (option == Constants.MenuChoices.ADD)
                                {
                                    Console.WriteLine(Constants.DataInsert.NAME);

                                    var professorName = Console.ReadLine();
                                    Console.WriteLine();

                                    Console.WriteLine(Constants.DataInsert.CLASS_SECTION);

                                    var professorClass = Console.ReadLine();
                                    Console.WriteLine();

                                    teachers.Add(new Teacher() { Name = professorName, ClassAndSection = professorClass });
                                }
                                else
                                {
                                    foreach (var teacher in teachers)
                                        Console.WriteLine($"The teacher's name is {teacher.Name} and they are teaching {teacher.ClassAndSection}");
                                }
                                break;

                            case Constants.Entity.SUBJECT:
                                if (option == Constants.MenuChoices.ADD)
                                {
                                    Console.WriteLine(Constants.DataInsert.NAME);

                                    var subjectName = Console.ReadLine();
                                    Console.WriteLine();

                                    Console.WriteLine(Constants.DataInsert.CODE);

                                    var subjectCode = Console.ReadLine();
                                    Console.WriteLine();

                                    subjects.Add(new Subject() { Name = subjectName, Code = subjectCode });
                                }
                                else
                                {
                                    foreach (var subject in subjects)
                                        Console.WriteLine($"The subject's name is {subject.Name} and the code is {subject.Code}");
                                }
                                break;

                            default:
                                break;
                        }

                        if (option == Constants.MenuChoices.ADD)
                            Console.WriteLine(Constants.Menu.ADDED);

                        break;

                    case Constants.MenuChoices.EXIT:
                        isInMenu = false;
                        break;

                    default:
                        Console.WriteLine(Constants.Menu.INVALID);
                        break;
                }
            }
        }
    }
}
