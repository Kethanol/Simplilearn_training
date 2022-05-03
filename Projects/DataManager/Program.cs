using Common;
using Entities;
using System;

namespace DataManager
{
    internal class Program
    {
        static void Main()
        {
            var teachers = Utils.GetSampleData();
            Utils.ExposeTeachers(teachers);
        }
    }
}
