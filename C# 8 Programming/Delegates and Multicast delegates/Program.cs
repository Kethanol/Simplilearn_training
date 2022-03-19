// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

int i1 = 10, i2 = 20, i3 = 0, i4 = 100;
//Calculate calculate = new Calculate(Add);
Calculate addCalculation = Add;
Calculate subtractCalculation = Subtract;

// Multicast delegate
Calculate bothOperations = Add;
bothOperations += Subtract;

Console.WriteLine($"The result of the add method is.. {addCalculation(i1, i2)}");
Console.WriteLine($"The result of the subtract method is.. {subtractCalculation(i1, i2)}");
Console.WriteLine($"Printing the results of both operations (last one executed).. {bothOperations(i3, i4)}");

static int Add(int x, int y) 
{ 
    Console.WriteLine("Executing the add method...");
    return x + y;
}

static int Subtract(int x, int y)
{
    Console.WriteLine("Executing the subtract method...");
    return x - y;
}

// Delegate - Type - defined a method signature (return type and parameter)
// Delegate -- can refer to any method that matches the method signature defined by the Delegate

delegate int Calculate(int first, int second);