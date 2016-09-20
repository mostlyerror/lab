using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {

        int version = 123;

        static void Main(string[] args)
        {
            const int four = 4;
            Func<int, int> addOne = x => x + 1;
            Func<int, int, int> calcArea = (x, y) => x * y;
            Func<int> twentyFive = () => calcArea(addOne(four), addOne(four));
            Console.WriteLine(twentyFive());

            Program myProgram = new Program();
            Console.WriteLine($"{myProgram.version}");

            Speedometer speedo = new Speedometer();
            speedo.Report();

            speedo.CurrentSpeed = 1;
            speedo.Report();

            speedo.CurrentSpeed = -1;
            speedo.Report();

            speedo.CurrentSpeed = 121;
            speedo.Report();

            speedo.CurrentSpeed = 25;
            speedo.Report();
        }

    }

    public class Speedometer
    {
        private int _currentSpeed;
        public int CurrentSpeed
        {
            get
            {
                return _currentSpeed;
            }
            set
            {
                if (value < 0) return;
                if (value > 120) return;
                // value is a keyword used in setters representing the new value;
                _currentSpeed = value;
            }
        }

        public void Report()
        {
            Console.WriteLine(this.CurrentSpeed);
        }
    }

    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string TaxPayerId { get; set; }
    }
}
