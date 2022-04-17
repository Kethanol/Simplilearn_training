using Entities;
using System.Collections.Generic;

namespace BusinessLogic.SortingAndSearching
{
    public class StudentSorter
    {
        public List<Student> Inner { get; set; }

        public StudentSorter(List<Student> inner)
        {
            Inner = inner;
        }

        public void DoBubble()
        {
            for (int i = Inner.Count; i >= 0; i--)
            {
                // Bigger values "bubble up"
                bool noSwaps = true;
                for (int j = 0; j < i - 1; j++)
                {

                    if (Inner[j].Name.CompareTo(Inner[j + 1].Name) > 0)
                    {

                        (Inner[j + 1], Inner[j]) = (Inner[j], Inner[j + 1]);
                        noSwaps = false;
                    }
                }

                if (noSwaps) break;
            }
        }
    }
}
