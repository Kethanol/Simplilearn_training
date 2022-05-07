using BusinessLogic.DataManipulation.Abstract;
using Common;
using Entities;
using System;
using System.Collections.Generic;

namespace BusinessLogic.DataManipulation.Concrete
{
    public class SubjectOperation : IConcreteOperation
    {
        private SubjectOperation() { }

        private static SubjectOperation _instance = null;

        public static SubjectOperation GetInstance()
        {
            if (_instance == null) _instance = new SubjectOperation();
            return _instance;
        }

        public List<Subject> Subjects { get; set; } = new List<Subject>();

        public void Add()
        {
            Console.WriteLine(Constants.DataInsert.NAME);

            var subjectName = Console.ReadLine();
            Console.WriteLine();

            Console.WriteLine(Constants.DataInsert.CODE);

            var subjectCode = Console.ReadLine();
            Console.WriteLine();

            Subjects.Add(new Subject() { Name = subjectName, Code = subjectCode });
        }

        public void Retrieve()
        {
            foreach (var subject in Subjects)
                Console.WriteLine($"The subject's name is {subject.Name} and the code is {subject.Code}");
        }
    }
}
