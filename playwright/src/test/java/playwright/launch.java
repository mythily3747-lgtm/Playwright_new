package playwright;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class launch {

	public static void main(String[] args) {
		Playwright play =Playwright.create();
		Browser bro = play.chromium().launch(
		        new BrowserType.LaunchOptions().setHeadless(false));
		Page page = bro.newPage();
		page.navigate("https://letcode.in/");
		String title = page.title();
		System.out.println(title);
		page.close();
		bro.close();
		play.close();
	}

}
