import { single_click, getTitlePage } from "../common_action/action";

describe("Open the browser and perform actions", function () {
  // Use before hook to open the browser and navigate to the URL
  before(async function () {
    await browser.url("http://fantoparkdev.com/");
    await browser.maximizeWindow();
  });

  it("Gets the URL and opens the browser", async function () {
    const pageTitle = await getTitlePage(); // Fetch title using imported method
    console.log("Page Title: ", pageTitle);
  });

  describe("Verify the nav buttons are clickable", function () {
    it("Verify Instagram button is clickable", async function () {
      const instaButton = await $(
        '//*[@id="root"]/div/div/div[1]/div[2]/div/a[1]'
      );
      //*[@id="root"]/div/div/div[1]/div[2]/div/a[1]
      await single_click(instaButton);
      // Use the imported single_click method
      // <------------>--------------handle ------------------------>
      const mainWindowHandle = await browser.getWindowHandle();
      // Get all window handles
      const allWindowHandles = await browser.getWindowHandles();

      // Assert that a new window was opened
      expect(allWindowHandles.length).toBeGreaterThan(1);

      // Switch to the new tab
      const newTabHandle = allWindowHandles.find(
        (handle) => handle !== mainWindowHandle
      );
      await browser.switchToWindow(newTabHandle);
      // Verify the new tab's URL or Title
      const newTabURL = await browser.getUrl();
      console.log(newTabURL);

      // Close the new tab if necessary and switch back to the main window
      await browser.closeWindow();
      await browser.switchToWindow(mainWindowHandle);
    });

    it("Verify youtube button is clickable", async function () {
      const instaButton = await $(
        '//*[@id="root"]/div/div/div[1]/div[2]/div/a[2]'
      );
      //*[@id="root"]/div/div/div[1]/div[2]/div/a[2]/svg
      await single_click(instaButton);
      // Use the imported single_click method
      // <------------>--------------handle ------------------------>
      const mainWindowHandle = await browser.getWindowHandle();
      // Get all window handles
      const allWindowHandles = await browser.getWindowHandles();

      // Assert that a new window was opened
      expect(allWindowHandles.length).toBeGreaterThan(1);

      // Switch to the new tab
      const newTabHandle = allWindowHandles.find(
        (handle) => handle !== mainWindowHandle
      );
      await browser.switchToWindow(newTabHandle);
      // Verify the new tab's URL or Title
      const newTabURL = await browser.getUrl();
      console.log(newTabURL);

      // Close the new tab if necessary and switch back to the main window
      await browser.closeWindow();
      await browser.switchToWindow(mainWindowHandle);
    });

    it("Verify linkedin button is clickable", async function () {
      const instaButton = await $(
        '//*[@id="root"]/div/div/div[1]/div[2]/div/a[3]'
      );
      //*[@id="root"]/div/div/div[1]/div[2]/div/a[2]/svg
      await single_click(instaButton);
      // Use the imported single_click method
      // <------------>--------------handle ------------------------>
      const mainWindowHandle = await browser.getWindowHandle();
      // Get all window handles
      const allWindowHandles = await browser.getWindowHandles();

      // Assert that a new window was opened
      expect(allWindowHandles.length).toBeGreaterThan(1);

      // Switch to the new tab
      const newTabHandle = allWindowHandles.find(
        (handle) => handle !== mainWindowHandle
      );
      await browser.switchToWindow(newTabHandle);
      // Verify the new tab's URL or Title
      const newTabURL = await browser.getUrl();
      console.log(newTabURL);

      // Close the new tab if necessary and switch back to the main window
      await browser.closeWindow();
      await browser.switchToWindow(mainWindowHandle);
    });
  });
});
