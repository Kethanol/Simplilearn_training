namespace BusinessLogic.Sorting_and_Searching
{
    public class Sorting<T> where T : class
    {
        public List<T> List { get; set; }

        public Sorting(List<T> list)
        {
            List = list;
        }

        public void Bubble() { 

        }
    }
}
