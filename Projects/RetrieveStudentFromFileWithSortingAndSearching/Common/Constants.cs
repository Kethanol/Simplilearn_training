namespace Common
{
    public static class Constants
    {
        public static class File
        {
            public static readonly string PATH = "\\assets\\student_data.txt";
            public static readonly string ERROR = "The item assets/student_data.txt inside the active directory is unavailable, unaccessible or the path is incorrect!";
        }

        public static class Menu
        {
            public static readonly string OPTION_SELECT = "\nSelect an option:";
            public static readonly string NAME_SEARCH = "\n1. Search a student by name";
            public static readonly string ALL = "2. Show all";
            public static readonly string EXIT = "3. Exit";
            public static readonly string NAME_ENTER = "\nEnter the name:";
            public static readonly string INVALID = "Invalid choice!";
        }

        public static class MenuChoices
        {
            public const string SEARCH = "1";
            public const string ALL = "2";
            public const string EXIT = "3";
        }
    }
}
