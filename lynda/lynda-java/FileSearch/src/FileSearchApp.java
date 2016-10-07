import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class FileSearchApp {

	String path, regex, zipFileName;
	Pattern pattern;
	ArrayList<File> zipFiles = new ArrayList<File>();

	public static void main(String[] args) {
		FileSearchApp app = new FileSearchApp();
		switch(Math.min(args.length, 3)) {
		case 0:
			System.out.println("USAGE: FileSearchApp path [regex] [zipfile]");
			return;
		case 3: app.setZipFileName(args[2]);
		case 2: app.setRegex(args[1]);
		case 1: app.setPath(args[0]);;
		}

		try {
			app.walkDirectoryJava8(app.getPath());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void walkDirectoryJava8(String path) throws IOException {
		Files.walk(Paths.get(path)).forEach(f -> processFile(f.toFile()));
		zipFilesJava7();
	}

	public void processFile(File file) {
		try {
			if (searchFileJava8(file)) {
				addFileToZip(file);
			}
		} catch (IOException|UncheckedIOException e) {
			System.out.println("Error processing file: " + file + ": " + e);
		}
	}
	
	public boolean searchFileJava8(File file) throws IOException {
		return Files.lines(file.toPath()).anyMatch(t -> searchText(t));
	}
	
	public boolean searchText(String text) {
		return (this.getRegex() == null) ? true : this.pattern.matcher(text).find();
	}
	
	public void addFileToZip(File file) {
		if (getZipFileName() != null) {
			zipFiles.add(file);
		}
	}
	
	public void zipFilesJava7() throws IOException {

		try (ZipOutputStream out = new ZipOutputStream(new FileOutputStream(getZipFileName()))) {

			File baseDir = new File(getPath());
			for (File file : zipFiles) {
				// fileName must be a relative path, not an absolute one.
				String fileName = getRelativeFileName(file, baseDir);
				
				ZipEntry zipEntry = new ZipEntry(fileName);
				zipEntry.setTime(file.lastModified());
				out.putNextEntry(zipEntry);
				
				Files.copy(file.toPath(), out);
				
				out.closeEntry();
			}
		}
	}
	
	public String getRelativeFileName(File file, File baseDir) {

		String fileName = file.getAbsolutePath().substring(baseDir.getAbsolutePath().length());
		System.out.println("baseDir: " + baseDir + "file: " + file + " = fileName: " + fileName);
		
		fileName = fileName.replace('\\',  '/');
		while (fileName.startsWith("/")) {
			fileName = fileName.substring(1);
		}

		return fileName;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getRegex() {
		return regex;
	}

	public void setRegex(String regex) {
		this.pattern = Pattern.compile(regex);
	}

	public String getZipFileName() {
		return zipFileName;
	}

	public void setZipFileName(String zipFileName) {
		this.zipFileName = zipFileName;
	}

}
