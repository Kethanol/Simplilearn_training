namespace Common
{
    public static class Constants
    {
        public static class Entity
        {
            public const string STUDENT = "Student";
            public const string TEACHER = "Teacher";
            public const string SUBJECT = "Subject";
        }

        public static class Menu
        {
            public static readonly string OPTION_SELECT = "\nSelect an option:";
            public static readonly string ADD = "\n1. Add a teacher";
            public static readonly string RETRIEVE_ALL = "2. Retrieve teachers";
            public static readonly string RETRIEVE_BY_ID = "3. Retrieve a teacher by ID";
            public static readonly string EXIT = "4. Exit\n";
            public static readonly string INVALID = "Invalid choice!";
            public static readonly string ENTITY_SELECT = "Select an entity:\n";
            public static readonly string ADDED = "Entity added!";
        }

        public static class MenuChoices
        {
            public const string ADD = "1";
            public const string RETRIEVE_ALL = "2";
            public const string RETRIEVE_BY_ID = "3";
            public const string EXIT = "4";
        }

        public static class DataInsert 
        {
            public const string NAME = "Enter the name:";
            public const string CLASS_SECTION = "Enter the class and section:";
        }
    }
}
