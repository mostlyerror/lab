import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Properties;

public class DatabaseTest {
	private static final String DB_PASSWORD = "dbPassword";
	private static final String DB_USER = "dbUser";
	private static final String DB_URL = "dbUrl";
	private static final String DB_PROPERTIES = "db.properties";
	
	private Properties globalProps;
	
	public void writeProperties() throws IOException {
		Properties prop = new Properties();
		prop.setProperty(DB_URL,  "localhost");
		prop.setProperty(DB_USER,  "username");
		prop.setProperty(DB_PASSWORD,  "password");
		
		try(OutputStream out = new FileOutputStream("project.properties")) {
			prop.store(out,  "Database Properties File");
		}
	}
	
	public void readProperties() throws IOException {
		try (InputStream in = new FileInputStream(DB_PROPERTIES)) {
			globalProps = new Properties();
			globalProps.load(in);
		}
	}

}
