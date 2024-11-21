import { single_click } from "../common_action/action";
// import Enquire from "../page_list/Enquire";

describe("Open the browser and perform actions", function () {
  // Use before hook to open the browser and navigate to the URL
  before(async function () {
    await browser.url("http://fantoparkdev.com/");
    await browser.maximizeWindow();
    await browser.pause(2000);
  });
  it("verify the Enquire module is open onclick", async function () {
    let clickEnq = $('//*[@id="trips_button"]');
    //*[@id="trips_button"]

    //*[@id="root"]/div/div/div[1]/div[2]/button/span
    single_click(clickEnq);
    await browser.pause(2000);
  });

  it("verify tour plans taps", async function () {
    // Find all div elements with the same ID
    const divElements = await $$('//*[@id="tour_list"]');

    // Get the count of matching elements
    const count = divElements.length;
    console.log(`Total Divs with ID "duplicate-id": ${count}`);

    // Loop through each div and perform an action
    for (let i = 0; i < count; i++) {
      console.log(`Performing action on Div #${i + 1}`);
      await browser.pause(2000);
      // Example: Get text content of each div
      const text = await divElements[i].getText();
      console.log(`Text of Div #${i + 1}:`, text);
      await browser.pause(2000);
      // Example: Click on each div
      await divElements[i].click();
    }
  });
  it("verify Freuestly asked Question taps", async function () {
    // Find all div elements with the same ID
    const divElements = await $$('//*[@id="asked_question"]');

    // Get the count of matching elements
    const count = divElements.length;
    console.log(`Total Divs with ID "duplicate-id": ${count}`);

    // Loop through each div and perform an action
    for (let i = 0; i < count; i++) {
      console.log(`Performing action on Div #${i + 1}`);
      await browser.pause(2000);
      // Example: Get text content of each div
      const text = await divElements[i].getText();
      console.log(`Text of Div #${i + 1}:`, text);
      await browser.pause(2000);
      // Example: Click on each div
      await divElements[i].click();
    }
  });
});

//*[@id="root"]/div/div/div[2]/div/main/div[3]/div/div[1]/div/div[2]/div[2]/div[1]/button
