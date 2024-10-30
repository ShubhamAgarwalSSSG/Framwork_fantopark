import { single_click } from "../common_action/action";
// import Enquire from "../page_list/Enquire";

describe("Open the browser and perform actions", function () {
  // Use before hook to open the browser and navigate to the URL
  before(async function () {
    await browser.url("http://fantoparkdev.com/");
    await browser.maximizeWindow();
    await browser.pause(2000);
  });
  //   it("verify the Enquire module is open onclick", async function () {
  //     let clickEnq = $('//*[@id="root"]/div/div/div[1]/div[2]/button/span');
  //     single_click(clickEnq);
  //     await browser.pause(2000);
  //   });

  it("verify the individual tournament Enquire in clickable", async function () {
    let clickEnq = $(
      '//*[@id="root"]/div/div/div[2]/div/main/div/div[2]/div[2]/div/div/div/div[1]/div/div[2]/div[2]/button'
    );
    single_click(clickEnq);
    await browser.pause(2000);
  });
  it("verify the tour plan", async function () {
    // Step 1: Locate the parent element using XPath
    let planDetails = await $(
      '//*[@id="root"]/div/div/div[2]/div/main/div[3]/div/div[1]/div/div[2]/div[2]'
    );

    // Step 2: Wait for the parent element to be displayed
    await planDetails.waitForDisplayed({ timeout: 5000 });

    // Step 3: Check if the parent element exists and is visible
    if (!(await planDetails.isExisting())) {
      console.error("Parent element not found.");
      return;
    }

    // Step 4: Try to get the direct child div elements using a different approach (XPath)
    let childElements = await planDetails.$$("./div"); // XPath to select direct child div elements

    console.log("Number of direct child divs: ", childElements.length);

    // Optional Step: Interact with the first child element (if exists)
    if (childElements.length > 0) {
      await childElements[0].waitForDisplayed({ timeout: 5000 });
      await childElements[0].click(); // Example interaction
    }

    // Pause for observation
    await browser.pause(2000);
  });
  it("verify the tour plan second option", async function () {
    // Step 1: Locate the parent element using XPath
    let planDetails_1 = await $(
      '//*[@id="root"]/div/div/div[2]/div/main/div[3]/div/div[1]/div/div[2]/div[2]/div[1]/button'
    );

    // Step 2: Wait for the parent element to be displayed
    await planDetails_1.waitForDisplayed({ timeout: 5000 });
    single_click(planDetails_1);

    // Step 3: Check if the parent element exists and is visible
    // if (!(await planDetails.isExisting())) {

    //   console.error("Parent element not found.");
    //   return;
    // }

    // Step 4: Try to get the direct child div elements using a different approach (XPath)
    // let childElements = await planDetails.$$("./div"); // XPath to select direct child div elements

    // console.log("Number of direct child divs: ", childElements.length);

    // // Optional Step: Interact with the first child element (if exists)
    // if (childElements.length > 0) {
    //   await childElements[0].waitForDisplayed({ timeout: 5000 });
    //   await childElements[0].click(); // Example interaction
    // }

    // Pause for observation
    await browser.pause(2000);
  });
});

//*[@id="root"]/div/div/div[2]/div/main/div[3]/div/div[1]/div/div[2]/div[2]/div[1]/button
