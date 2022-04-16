using System.Collections.Generic;

namespace BusinessLogic.SortingAndSearching
{
    public class Searcher
    {
        public string[] Inner { get; set; }

        public Searcher(string[] studentList)
        {
            Inner = studentList;
        }

        public IEnumerable<string> DoBy(string item)
        {

            List<string> result = new List<string>();

            foreach (var student in Inner)
            {

                var studentData = student.Split(',');
                var name = studentData[0];

                if (ContainsNaive(name.ToLowerInvariant(), item.ToLowerInvariant())) result.Add(student);
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
