
#include <iostream>
#include <string>

using namespace std;

string askText(string prompt);
int askNumber(string prompt);
void tellStory(string name, string noun, int number, string bodyPart, string verb);

int main()
{
  cout << "Mad Lib! ---- \n\n";
  cout << "Answer the following questions to create a new story.\n";

  string name = askText("Please enter a name: ");
  string noun = askText("Please enter a plural noun: ");
  int number = askNumber("Please enter a number: ");
  string bodyPart = askText("Please enter a body part: ");
  string verb = askText("Please enter a verb: ");
  tellStory(name, noun, number, bodyPart, verb);
}

string askText(string prompt)
{
  string result;
  cout << prompt;
  cin >> result;
  return result;
}

int askNumber(string prompt)
{
  int result;
  cout << prompt;
  cin >> result;
  return result;
}

void tellStory(string name, string noun, int number, string bodyPart, string verb)
{
  cout << "\nHere's your story:\n"
       << "The famous explorer "
       << name
       << " had nearly given up a life long quest to find\n"
       << "The Lost City of "
       << noun
       << " when one day, the "
       << noun
       << " found the explorer.\n"
       << "Surrounded by "
       << number
       << " "
       << noun
       << ", a tear came to "
       << name << "'s "
       << bodyPart << ".\n"
       << "After all this time, the quest was finally over. "
       << "And then, the "
       << noun << "\n"
       << "promptly devoured "
       << name << ". "
       << "The moral of the story? Be careful what you "
       << verb
       << " for.";
}
