using System;

public class HelloWorld
{
    static public void Main()
    {
        string line;
        line = Console.ReadLine();
        int N = Convert.ToInt32(line);
        line = Console.ReadLine();

        string[] words = line.Split();
        string result = string.Join("", words);

        Console.Out.WriteLine(result);
    }
}