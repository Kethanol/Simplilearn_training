using System;
using System.Collections.Generic;

namespace Entities
{
    public class Teacher
    {
        public string Name { get; set; }
        public List<Subject> TeachedSubjects { get; set; } = new List<Subject>();

        public Teacher AddSubject(Subject subject)
        {
            TeachedSubjects.Add(subject);
            return this;
        }

        public void Expose()
        {
            foreach (var subject in TeachedSubjects)
            {
                Console.WriteLine($"{subject.Name} is teached by {subject.Teacher.Name} and has the following students: ");
                subject.Expose();
            }
        }
    }
}
