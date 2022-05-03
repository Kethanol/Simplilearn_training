using System;
using System.Collections.Generic;

namespace Entities
{
    public class Subject
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public Teacher Teacher { get; set; }
        public List<Student> AttendingStudents { get; set; } = new List<Student>();

        public Subject AddAttendingStudent(Student student) { 
            AttendingStudents.Add(student);
            return this;
        }

        public void Expose() 
        {
            foreach (var student in AttendingStudents)
            {
                Console.WriteLine($"  {student.Name}");
            }

            Console.WriteLine();
        }
    }
}
