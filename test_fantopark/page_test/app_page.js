import { single_click, getTitlePage } from "../common_action/action";

describe("Open the browser and verify the to perform actions of all the elements", function () {
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
      const instaButton = await $('//*[@id="home_insta"]');
      //*[@id="root"]/div/div/div[1]/div[2]/div/a[1]
      //*[@id="home_insta"]
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
      await browser.pause(7000);
      // Close the new tab if necessary and switch back to the main window

      await browser.closeWindow();
      await browser.pause(2000);
      await browser.switchToWindow(mainWindowHandle);
    });

    it("Verify Linkedin button is clickable", async function () {
      const linked = await $('//*[@id="home_linkedin"]');
      //*[@id="home_linkedin"]
      //*[@id="root"]/div/div/div[1]/div[2]/div/a[2]/svg
      await single_click(linked);
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
      await browser.pause(7000);

      // Close the new tab if necessary and switch back to the main window
      await browser.closeWindow();
      await browser.pause(2000);
      await browser.switchToWindow(mainWindowHandle);
    });

    it("Verify youtube button is clickable", async function () {
      const youtube = await $('//*[@id="home_youtube"]');
      //*[@id="home_youtube"]
      //*[@id="root"]/div/div/div[1]/div[2]/div/a[2]/svg
      await single_click(youtube);
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
      await browser.pause(7000);
      // Close the new tab if necessary and switch back to the main window
      await browser.closeWindow();
      await browser.pause(2000);
      await browser.switchToWindow(mainWindowHandle);
    });
    it("verify the imager crowser is forword_click", async function () {
      let forword_button = $(
        '//*[@id="root"]/div/div/div[2]/div/main/div/div[2]/div[2]/div/div/div[2]/button[1]'
      );

      single_click(forword_button);
      await browser.pause(2000);
      single_click(forword_button);
      await browser.pause(2000);

      //*[@id="root"]/div/div/div[2]/div/main/div/div[2]/div[2]/div/div/div[2]/button[2]
    });
    it("verify the imager crowser is Backword_click", async function () {
      let forword_back = $(
        '//*[@id="root"]/div/div/div[2]/div/main/div/div[2]/div[2]/div/div/div[2]/button[2]'
      );
      await browser.pause(1000);
      single_click(forword_back);
      await browser.pause(1000);
      single_click(forword_back);
      await browser.pause(1000);
    });
    it("verify if the video is playable", async function () {
      const videoContainers = await $$('//*[@id="video_player"]'); // Adjusted XPath
      console.log(
        `Total child video elements found: ${videoContainers.length}`
      );
      // Step 1: Locate the video thumbnail element and click to open the modal
      const videoThumbnail = await $('//*[@id="video_player"]');
      await videoThumbnail.waitForDisplayed({ timeout: 5000 });
      await single_click(videoThumbnail); // Assuming single_click is a wrapper for .click()
      await browser.pause(2000); // Allow time for modal to load

      // Step 2: Wait for the modal's play button to appear
      const playButton = await $('//*[@id="video_play"]'); // Adjust selector as needed
      await playButton.waitForDisplayed({ timeout: 5000 });

      // Step 3: Click the play button twice to ensure playback starts
      await playButton.click();
      await browser.pause(5000); // Pause briefly between clicks
      await playButton.click();

      // Step 4: Wait for a few seconds to ensure the video starts playing
      await browser.pause(8000);

      // Optional: Verify the video is playing
      const videoElement = await $('//*[@id="video_play"]'); // Replace with the correct selector for the video element
      const isPlaying = await browser.execute((video) => {
        return video && !video.paused && !video.ended;
      }, videoElement);

      console.log("Is the video playing? ", isPlaying);

      // Step 5: Close the modal (if applicable)
      const closeButton = await $('//*[@id="video_close"]'); // Replace with the actual selector
      await closeButton.waitForDisplayed({ timeout: 5000 });
      await closeButton.click();

      await browser.pause(2000); // Allow time for the modal to close
    });
    it("verify the terms and condition is clickable", async function () {
      let terms = $('//*[@id="home_terms"]');
      await single_click(terms);
      // <----------------handle----------->
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
      await browser.pause(2000);
      // Close the new tab if necessary and switch back to the main window
      await browser.closeWindow();
      await browser.pause(2000);
      await browser.switchToWindow(mainWindowHandle);
    });
    it("verify the home_refund is clickable", async function () {
      let terms = $('//*[@id="home_refund"]');
      await single_click(terms);
      // <----------------handle----------->
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
      await browser.pause(2000);
      // Close the new tab if necessary and switch back to the main window
      await browser.closeWindow();
      await browser.pause(2000);
      await browser.switchToWindow(mainWindowHandle);
    });
    it("verify the home_policy is clickable", async function () {
      let terms = $('//*[@id="home_policy"]');
      await single_click(terms);
      // <----------------handle----------->
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
      await browser.pause(2000);
      // Close the new tab if necessary and switch back to the main window
      await browser.closeWindow();
      await browser.pause(2000);
      await browser.switchToWindow(mainWindowHandle);
    });
  });
});
