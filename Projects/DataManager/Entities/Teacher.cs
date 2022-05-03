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

        public void Expose(bool withSubjects)
        {
            Console.WriteLine($"The following subjects are teached by {Name}:");
            foreach (var subject in TeachedSubjects)
            {
                Console.WriteLine($"{subject.Name}");
                if (withSubjects) {
                    Console.WriteLine("The students that are attending are:");
                    subject.Expose();
                }
            }

            Console.WriteLine();
        }
    }
}
