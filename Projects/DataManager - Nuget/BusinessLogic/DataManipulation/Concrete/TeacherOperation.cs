using BusinessLogic.DataManipulation.Abstract;
using Common;
using Entities;
using System;
using System.Collections.Generic;

namespace BusinessLogic.DataManipulation.Concrete
{
    public class TeacherOperation : IConcreteOperation
    {
        private TeacherOperation() { }

        private static TeacherOperation _instance = null;

        public static TeacherOperation GetInstance()
        {
            if (_instance == null) _instance = new TeacherOperation();
            return _instance;
        }

        public List<Teacher> Teachers { get; set; } = new List<Teacher>();

        public void Add()
        {
            Console.WriteLine(Constants.DataInsert.NAME);

            var professorName = Console.ReadLine();
            Console.WriteLine();

            Console.WriteLine(Constants.DataInsert.CLASS_SECTION);

            var professorClass = Console.ReadLine();
            Console.WriteLine();

            Teachers.Add(new Teacher() { Name = professorName, ClassAndSection = professorClass });
        }

        public void Retrieve()
        {
            foreach (var teacher in Teachers)
                Console.WriteLine($"The teacher's name is {teacher.Name} and they are teaching {teacher.ClassAndSection}");
        }
    }
}
