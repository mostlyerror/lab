from langchain_openai import OpenAI
from dotenv import load_dotenv


load_dotenv()

def generate_pet_name():
    llm = OpenAI(temperature=0.6)

    names = llm.invoke("I have a pet cat and I want a cool name for it. Suggest me three cool names for my pet.")

    return names

if __name__ == "__main__":
    print(generate_pet_name())