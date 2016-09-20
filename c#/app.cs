

using System;
using System.Collections.Generic;

namespace App
{
	class Program 
	{
		static void Main(string[] args)
		{

			//arrays
			string input = "red,blue,yellow,green";
			string[] colors = input.Split(',');
			Console.WriteLine(colors);
			Console.WriteLine(String.Join(" | ", colors));


			// lists
			List<int> someInts = new List<int>();
			someInts.Add(2);

			List<int> moreIntgs = new List<int>() { 2, 3, 4 };
			List<string> colorList = new List<string>(colors);
			Console.WriteLine(colorList);


		}
	}
}
