
#include <iostream>

using namespace std;

void print(string label, int value);
void print(string label, string value);

int main()
{
  int myScore = 100;
  int& mikesScore = myScore;

  print("myScore is: ", myScore);
  print("mikesScore is: ", mikesScore);

  cout << "Adding 500 to myScore\n";
  myScore += 500;

  print("myScore is: ", myScore);
  print("mikesScore is: ", mikesScore);

  cout << "Adding 500 to mikesScore\n";
  mikesScore += 500;

  print("myScore is: ", myScore);
  print("mikesScore is: ", mikesScore);

  return 0;
}

void print(string label, int value)
{
  cout << label << value << "\n";
}

void print(string label, string value)
{
  cout << label << value << "\n";
}
