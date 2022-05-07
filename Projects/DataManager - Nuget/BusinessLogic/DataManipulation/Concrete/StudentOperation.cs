using BusinessLogic.DataManipulation.Abstract;
using Common;
using Entities;
using System;
using System.Collections.Generic;

namespace BusinessLogic.DataManipulation.Concrete
{
    public sealed class StudentOperation : IConcreteOperation
    {
        private StudentOperation() {}

        private static StudentOperation _instance = null;

        public static StudentOperation GetInstance() 
        { 
            if(_instance == null) _instance = new StudentOperation();
            return _instance;
        }

        public List<Student> Students { get; set; } = new List<Student>();

        public void Add()
        {
            Console.WriteLine(Constants.DataInsert.NAME);

            var studentName = Console.ReadLine();
            Console.WriteLine();

            Console.WriteLine(Constants.DataInsert.CLASS_SECTION);

            var studentClass = Console.ReadLine();
            Console.WriteLine();

            Students.Add(new Student() { Name = studentName, ClassAndSection = studentClass });
        }

        public void Retrieve()
        {
            foreach (var student in Students)
                Console.WriteLine($"The student's name is {student.Name} and they are attenting {student.ClassAndSection}");
        }

    }
}
