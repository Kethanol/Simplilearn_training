// See https://aka.ms/new-console-template for more information
static void DeclareEmployee()
{
    Customer customer;
    customer.Age = 35;
    customer.Name = "John";
    customer.IsEmployee = true;
    Console.WriteLine($"{customer.Name} is a {customer.Age} years old employee");
}


Console.WriteLine("Hello, World!");

string? name = Console.ReadLine();
Console.WriteLine($"Hi, {name}. How are you doing?");

DeclareEmployee();

public struct Customer
{
    public int Age;
    public string Name;
    public bool IsEmployee;
}
