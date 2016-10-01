import java.util.Scanner;

public class Identity {
	public static void main(String[] args) {
		String prompt = args[0];
		Scanner in = new Scanner(System.in);
		String name = in.nextLine();
		int age = Integer.parseInt(in.nextLine());
		System.out.println("Hello, "+name+" nice to meet you\nYou are "+age+" years old!");

	}
}
