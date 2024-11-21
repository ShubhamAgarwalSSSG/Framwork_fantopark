import { single_click } from "../common_action/action";

describe("Open the browser and perform actions", function () {
  // Use before hook to open the browser and navigate to the URL
  before(async function () {
    await browser.url("http://fantoparkdev.com/");
    await browser.maximizeWindow();
  });

  it("verify if the video is playable", async function () {
    const videoContainers = await $$('//*[@id="video_player"]'); // Adjusted XPath
    console.log(`Total child video elements found: ${videoContainers.length}`);
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
    await browser.pause(2000); // Pause briefly between clicks
    await playButton.click();

    // Step 4: Wait for a few seconds to ensure the video starts playing
    await browser.pause(5000);

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
});
