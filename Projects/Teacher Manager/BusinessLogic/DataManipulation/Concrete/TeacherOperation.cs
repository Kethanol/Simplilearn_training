using BusinessLogic.DataManipulation.Abstract;
using BusinessLogic.DataManipulation.Abstract.Contracts;
using Common;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BusinessLogic.DataManipulation.Concrete
{
    public class TeacherOperation : IConcreteOperation, IExposer<Teacher>
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

            // File writer logic
        }

        public void Retrieve()
        {
            // File reader logic

            ExposeAll(Teachers);
        }

        public void RetrieveById(int id)
        {
            var teacher = Teachers.FirstOrDefault(t => t.ID == id);

            if (teacher == null)
                Console.Write($"No teacher with the ID {id} was found!\n");
            else
                ExposeSingle(teacher);
        }

        public void ExposeSingle(Teacher entity) => Console.WriteLine($"The teacher's name is {entity.Name} and they are teaching {entity.ClassAndSection}");

        public void ExposeAll(List<Teacher> entities) => entities.ForEach(t => ExposeSingle(t));
    }
}
