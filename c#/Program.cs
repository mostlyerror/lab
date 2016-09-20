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
            speedo.setCurrentSpeed(-1);
            speedo.Report();
            speedo.setCurrentSpeed(121);
            speedo.Report();
            speedo.setCurrentSpeed(25);
            speedo.Report();
        }

    }

    public class Speedometer
    {
        private int _currentSpeed;
        public int GetCurrentSpeed()
        {
            return _currentSpeed;
        }
        public void setCurrentSpeed(int newSpeed)
        {
            if (newSpeed < 0) return;
            if (newSpeed > 120) return;

            _currentSpeed = newSpeed;
        }
        public void Report()
        {
            Console.WriteLine($"current speed: {this.GetCurrentSpeed()}");
        }
    }


}
