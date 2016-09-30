public class NumConversion {
	public static void main(String[] args) {
		int firstArg = 0;
		if (args.length > 0) {
			try {
				firstArg = Integer.parseInt(args[0]);
			}
			catch (NumberFormatException e) {
				System.out.println("Argument "+args[0]+" must be an integer.");
				e.printStackTrace();
			}
			System.out.println("You entered "+firstArg);
		}
	}
}
