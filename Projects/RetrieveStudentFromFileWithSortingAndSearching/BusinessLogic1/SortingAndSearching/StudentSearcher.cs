using Entities;
using System.Collections.Generic;

namespace BusinessLogic.SortingAndSearching
{
    public class StudentSearcher
    {
        public List<Student> Inner { get; set; }

        public StudentSearcher(IEnumerable<Student> inner)
        {
            Inner = (List<Student>)inner;
        }

        public IEnumerable<Student> DoBy(string item)
        {
            List<Student> result = new List<Student>();

            foreach (var student in Inner)
            {
                if (ContainsNaive(student.Name.ToLowerInvariant(), item.ToLowerInvariant())) result.Add(student);
            }

            return result;
        }

        private bool ContainsNaive(string toFindIn, string pattern)
        {
            bool patternIsContained = false;

            for (int i = 0; i < toFindIn.Length; i++)
            {
                if (toFindIn[i] == pattern[0])
                {
                    for (int j = 1; j < pattern.Length; j++)
                    {
                        if (toFindIn[i + j] != pattern[j]) break;
                        if (j == pattern.Length - 1)
                        {
                            patternIsContained = true;
                            break;
                        }
                    }
                }
            }

            return patternIsContained;
        }
    }
}
