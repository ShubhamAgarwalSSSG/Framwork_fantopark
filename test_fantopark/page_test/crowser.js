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
    it("verify the imager crowser is clickable", async function () {
      let forword_button = $(
        '//*[@id="root"]/div/div/div[2]/div/main/div/div[2]/div[2]/div/div/div[2]/button[1]'
      );
      await browser.pause(2000);
      single_click(forword_button);
      await browser.pause(2000);
      single_click(forword_button);
      await browser.pause(2000);

      //*[@id="root"]/div/div/div[2]/div/main/div/div[2]/div[2]/div/div/div[2]/button[2]
    });

    it("verify the imager crowser is clickable", async function () {
      let forword_back = $(
        '//*[@id="root"]/div/div/div[2]/div/main/div/div[2]/div[2]/div/div/div[2]/button[2]'
      );
      await browser.pause(2000);
      single_click(forword_back);
      await browser.pause(2000);
      single_click(forword_back);
      await browser.pause(2000);
    });
  });
});
