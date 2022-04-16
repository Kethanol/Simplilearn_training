using System.Collections.Generic;

namespace BusinessLogic.SortingAndSearching
{
    public class Sorting
    {
        public string[] Inner { get; set; }

        public Sorting(string[] inner)
        {
            Inner = inner;
        }

        public void DoBubble() {
            for (int i = Inner.Length; i >= 0; i--) {

                // Bigger values "bubble up"
                bool noSwaps = true;
                for (int j = 0; j < i - 1; j++) {

                    var currentStudentData = Inner[j].Split(',');
                    var nextStudentData = Inner[j + 1].Split(',');

                    if (currentStudentData[0].CompareTo(nextStudentData[0]) > 0) {

                        (Inner[j + 1], Inner[j]) = (Inner[j], Inner[j + 1]);
                        noSwaps = false;
                    }
                }

                if (noSwaps) break;
            }
        }
    }
}
