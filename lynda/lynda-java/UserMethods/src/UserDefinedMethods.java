import java.util.Scanner;

public class UserDefinedMethods {
	static Scanner in = new Scanner(System.in);

	public static void main(String[] args) {
		double total = getTotal();
		print(total);
	}
	
	static double getTotal() {
		double total = 0f;
		Boolean moreItems = true;
		char response;
		while(moreItems) {
			total += getItemPrice(getItemName());
			System.out.println("More items? (y/n)");
			response = in.next().charAt(0);
			if(response != 'y' && response != 'Y') {
				moreItems = false;
			}
			in.nextLine();
		}
		return total;
	}
	
	static String getItemName() {
		String name = "";
		System.out.println("Enter item name: ");
		name = in.nextLine();
		return name;
	}
	
	static double getItemPrice(String name) {
		double price = 0f;
		try {
			System.out.println("Enter price for: " + name + ": ");
			price = in.nextDouble();
		}
		catch(Exception e) {
			System.out.println("Invalid data type entered");
			e.printStackTrace();
		}
		int quantity = getItemQuantity();
		return quantity * price;
	}
	
	static int getItemQuantity() {
		System.out.println("Enter the quantity for this item: ");
		int quantity = in.nextInt();
		return quantity;
	}
	
	static void print(double total) {
		System.out.printf("The total for your grocery items is: $%5.2f, thanks for shopping with us!\n\n", total);
	}
}
