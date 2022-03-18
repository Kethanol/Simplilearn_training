// See https://aka.ms/new-console-template for more information

//Console.WriteLine("Hello, World!");

//string? name = Console.ReadLine();
//Console.WriteLine($"Hi, {name}. How are you doing?");

//DeclareEmployee();

Console.WriteLine($"Enum Directions.North has value as {(int)Directions.North}");

if (Enum.TryParse("West", out Directions parsedDirection))
    Console.WriteLine($"Parsed direction: {parsedDirection}");

Console.WriteLine($"The sum is: {AddNumbers(1, 2, 3)}");
Console.WriteLine($"The number is: {Identity(1)}");

int byValuePlaceholder = 20, byRefPlaceholder = 20, byOutPlaceholder;

Console.WriteLine($"MethodByValue call value: {MethodByValue(byValuePlaceholder)}, original value: {byValuePlaceholder}");
Console.WriteLine($"MethodByRef call value: {MethodByRef(ref byRefPlaceholder)}, original value: {byRefPlaceholder}");
Console.WriteLine($"MethodByOut call value: {MethodByOut(out byOutPlaceholder)}, original value: {byOutPlaceholder}");

static int AddNumbers(params int[] numbers) => numbers.Sum();
static int Identity(in int number) => number; // Readonly parameter

static int MethodByValue(int param) {
    param = 10;
    return param;
}

static int MethodByRef(ref int param)
{
    param = 10;
    return param;
}

static int MethodByOut(out int param)
{
    param = 10;
    return param;
}

static void DeclareEmployee()
{
    Customer customer;
    customer.Age = 35;
    customer.Name = "John";
    customer.IsEmployee = true;
    Console.WriteLine($"{customer.Name} is a {customer.Age} years old employee");
}

struct Customer
{
    public int Age;
    public string Name;
    public bool IsEmployee;
}

enum Directions
{
    East = 1,
    West,
    North,
    South,
}
