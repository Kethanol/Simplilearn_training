using System.Collections.Generic;

namespace BusinessLogic.SortingAndSearching
{
    public class Sorting<T>
    {
        public IEnumerable<T> Inner { get; set; }

        public Sorting(IEnumerable<T> inner)
        {
            Inner = inner;
        }

        public void DoBubble() { 

        }
    }
}
