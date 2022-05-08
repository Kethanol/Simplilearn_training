using BusinessLogic.DataManipulation.Abstract;
using BusinessLogic.DataManipulation.Abstract.Contracts;
using Common;
using Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessLogic.DataManipulation.Concrete
{
    public sealed class TeacherOperation : IConcreteOperation, IExposer<Teacher>, IFileOperation<Teacher>
    {
        private readonly string _path;

        private TeacherOperation(string path) 
        { 
            _path = path;
        }

        private static TeacherOperation _instance = null;

        public static TeacherOperation GetInstance(string path)
        {
            if (_instance == null) _instance = new TeacherOperation(path);
            return _instance;
        }

        public async Task Add()
        {
            Console.WriteLine(Constants.DataInsert.NAME);

            var teacherName = Console.ReadLine();
            Console.WriteLine();

            Console.WriteLine(Constants.DataInsert.CLASS_SECTION);

            var teacherClass = Console.ReadLine();
            Console.WriteLine();

            await WriteToFile(_path, new Teacher() { Name = teacherName, ClassAndSection = teacherClass });
        }

        public void Retrieve()
        {
            var teachers = ReadFromFile(_path);

            if (!teachers.Any())
                Console.Write("No teachers were found!\n");
            else
                ExposeAll(teachers);
        }

        public void RetrieveById(int id)
        {
            var teachers = ReadFromFile(_path);
            var teacher = teachers.FirstOrDefault(t => t.ID == id);

            if (teacher == null)
                Console.Write($"No teacher with the ID {id} was found!\n");
            else
                ExposeSingle(teacher);
        }

        public void ExposeSingle(Teacher entity)
        {
            if (entity != null)
                Console.WriteLine($"The teacher's name is {entity.Name} and they are teaching {entity.ClassAndSection}");
            else
                throw new ArgumentNullException(nameof(entity));
         }

        public void ExposeAll(List<Teacher> entities) => entities.ForEach(t => ExposeSingle(t));

        public List<Teacher> ReadFromFile(string path)
        {
            var data = File.ReadAllLines(path);
            var result = new List<Teacher>();

            foreach (var line in data)
            {
                var teacherData = line.Split(',');
                result.Add(new Teacher() { ID = Convert.ToInt32(teacherData[0]), Name = teacherData[1], ClassAndSection = teacherData[2] });
            }

            return result;
        }

        public async Task WriteToFile(string path, Teacher entity)
        {
            var existingData = ReadFromFile(path);
            var maxId = !existingData.Any() ? 0 : existingData.Max(t => t.ID);

            var line = $"{maxId + 1},{entity.Name},{entity.ClassAndSection}";

            using (StreamWriter sw = new StreamWriter(path, append: true))
            {
                await sw.WriteLineAsync(line);
            }
        }
    }
}
