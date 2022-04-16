using System.Collections;
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

        public IEnumerable<string> DoBy(string item) {

            List<string> result = new List<string>();

            foreach (var student in Inner) {

                var studentData = student.Split(',');
                var name = studentData[0];

                if(name.ToLowerInvariant().Contains(item.ToLowerInvariant())) result.Add(student);
            }

            return result;
        }
    }
}
