using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            Course course = new Course("Biology 101");
            Console.WriteLine(course.CourseName);
            Console.WriteLine(course.RosterNames());
            course.RosterNames().ForEach(Console.WriteLine);
        }
    }

    public class Person
    {
        protected string FirstName { get; private set; }
        protected string LastName { get; private set; }
        public DateTime DateOfBirth { get; private set; }
        
        public Person(string firstName, string lastName, DateTime dateOfBirth)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.DateOfBirth = dateOfBirth;
        }

        public string FullName { get { return $"{this.FirstName} {this.LastName}"; } }

        public bool IsAnAdult()
        {
            var eighteenYearsAgo = DateTime.Today.AddYears(-18);
            return this.DateOfBirth < eighteenYearsAgo;
        }
    }

    public class Student : Person
    {
        public Student(string firstName, string lastName, DateTime dateOfBirth) : base(firstName, lastName, dateOfBirth) { }
        public string SchoolName { get; set; }
        public string RosterName { get { return $"{this.LastName}, {this.FirstName}"; } }
    }

    public class Course
    {
        public string CourseName;
        private List<Student> Roster { get; } = new List<Student>();
        
        public Course(string courseName)
        {
            this.CourseName = courseName;
            this.Roster.Add(new Student("Ben", "poon", DateTime.Now));
            this.Roster.Add(new Student("Sarah", "Chen", DateTime.Today));
        }
        public List<string> RosterNames()
        {
            List<string> rosterNames = new List<string>();
            Roster.ForEach(student => rosterNames.Add(student.RosterName));
            return rosterNames;
        }
    }
}
