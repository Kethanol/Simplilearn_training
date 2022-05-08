using BusinessLogic.DataManipulation.Abstract;
using BusinessLogic.DataManipulation.Abstract.Contracts;
using Common;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BusinessLogic.DataManipulation.Concrete
{
    public class TeacherOperation : IOption, IExposer<Teacher>, IFileOperation<Teacher>
    {
        private TeacherOperation() { }

        private static TeacherOperation _instance = null;

        public static TeacherOperation GetInstance()
        {
            if (_instance == null) _instance = new TeacherOperation();
            return _instance;
        }

        public void Add()
        {
            Console.WriteLine(Constants.DataInsert.NAME);

            var teacherName = Console.ReadLine();
            Console.WriteLine();

            Console.WriteLine(Constants.DataInsert.CLASS_SECTION);

            var teacherClass = Console.ReadLine();
            Console.WriteLine();

            WriteToFile("", new Teacher() { Name = teacherName, ClassAndSection = teacherClass });
        }

        public void Retrieve()
        {
            var teachers = ReadFromFile("");
            ExposeAll(teachers);
        }

        public void RetrieveById(int id)
        {
            var teachers = ReadFromFile("");
            var teacher = teachers.FirstOrDefault(t => t.ID == id);

            if (teacher == null)
                Console.Write($"No teacher with the ID {id} was found!\n");
            else
                ExposeSingle(teacher);
        }

        public void ExposeSingle(Teacher entity) => Console.WriteLine($"The teacher's name is {entity.Name} and they are teaching {entity.ClassAndSection}");

        public void ExposeAll(List<Teacher> entities) => entities.ForEach(t => ExposeSingle(t));

        public List<Teacher> ReadFromFile(string path)
        {
            throw new NotImplementedException();
        }

        public void WriteToFile(string path, Teacher entity)
        {
            throw new NotImplementedException();
        }
    }
}
