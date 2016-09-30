import java.util.ArrayList;

public class Streams {
	public static void main(String[] args) {
		ArrayList<Message> messages = new ArrayList<>();
		messages.add(new Message("bpoon", "foo", 56854));
		messages.add(new Message("bpoon", "foo", 85));
		messages.add(new Message("rsmith", "bar", 9999));
		messages.add(new Message("bpoon", "foo", 4564));

//		old way
//		for (Message message : messages) {
//			if (message.delay > 3000) {
//				System.out.println(message);
//			}
//		}
		
//		simplified with streams
//		messages.stream().filter(m -> m.delay > 3000).forEach(item -> System.out.println(item));
//		pass function as terminal
//		messages.stream()
//				.filter(m -> m.delay > 3000)
//				.forEach(System.out::println);
		
		long total = messages.stream()
				.filter(m -> m.delay > 3000)
				.mapToLong(m -> m.delay)
				.sum();
		System.out.println(total);
		
		
	}
}

class Message {
	public String key, value;
	public int delay;

	public Message(String key, String value, int delay) {
		this.key = key;
		this.value = value;
		this.delay = delay;
	}

	public String toString() {
		return key + "; " + value + "; " + delay;
	}
}
