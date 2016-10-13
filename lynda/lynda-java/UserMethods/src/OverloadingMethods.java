import java.util.Scanner;

public class OverloadingMethods {
	static Scanner in = new Scanner(System.in);
	public static void main(String[] args){
		System.out.println("Enter name of store or \"None\" if unknown: ");
		String storeName = in.nextLine();
		double total = 10f;
		if (storeName.equalsIgnoreCase("None")) {
			print(total);
		}
		else {
			print(total, storeName);
		}
	}
	
	static void print(double total) {
		System.out.println("called with: "+total);
	}
	static void print(double total, String name) {
		System.out.println("called with: "+total+ " " +name);
	}
}
