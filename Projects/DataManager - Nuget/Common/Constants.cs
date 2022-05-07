namespace Common
{
    public static class Constants
    {
        public static class Entity
        {
            public const string STUDENT = "Student";
            public const string PROFESSOR = "Professor";
            public const string SUBJECT = "Subject";
        }

        public static class Menu
        {
            public static readonly string OPTION_SELECT = "\nSelect an option:";
            public static readonly string ADD = "\n1. Add an entity";
            public static readonly string RETRIEVE = "2. Retrieve entitites";
            public static readonly string EXIT = "3. Exit\n";
            public static readonly string INVALID = "Invalid choice!";
            public static readonly string ENTITY_SELECT = "Select an entity:\n";
            public static readonly string ADDED = "Entity added!";
        }

        public static class MenuChoices
        {
            public const string ADD = "1";
            public const string RETRIEVE = "2";
            public const string EXIT = "3";
        }

        public static class DataInsert 
        {
            public const string NAME = "Enter the name:";
            public const string CLASS_SECTION = "Enter the class and section:";
            public const string CODE = "Enter the code:";
        }
    }
}
