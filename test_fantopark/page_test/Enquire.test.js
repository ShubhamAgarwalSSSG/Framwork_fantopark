import { single_click } from "../common_action/action";
import Enquire from "../page_list/Enquire";

describe("Open the browser and perform actions", function () {
  // Use before hook to open the browser and navigate to the URL
  before(async function () {
    await browser.url("http://fantoparkdev.com/");
    await browser.maximizeWindow();
    await browser.pause(2000);
  });
  it("verify the Enquire module is open onclick", async function () {
    let clickEnq = $('//*[@id="root"]/div/div/div[1]/div[2]/button/span');
    single_click(clickEnq);
    await browser.pause(2000);
  });

  // it("verify user enter there name", async function () {
  //   Enquire.username.setValue("shubham");

  //   await browser.pause(2000);
  // });
  // it("verify user enter there email", async function () {
  //   Enquire.email.setValue("shubhamagrwal@g,ail.com");

  //   await browser.pause(2000);
  // });
  // it("verify user enter there phone number", async function () {
  //   Enquire.phone.setValue("876818191");

  //   await browser.pause(2000);
  // });
  // it("verify user enter referral code", async function () {
  //   Enquire.referral.setValue("123");

  //   await browser.pause(2000);
  // });
  it("verify to select the dropdown option", async function () {
    // Click to open the dropdown
    const selectOption = await $(
      '//*[@id="root"]/div/div/div[1]/div[3]/div[2]/div/div[2]/form/div[1]/div[4]/div/div[1]'
    );
    await selectOption.click(); // Click the field to open dropdown
    await browser.pause(4000); // Pause to wait for the dropdown to open

    // Get the list of dropdown options
    const getListdrop = await $$('//*[@id="react-select-2-listbox"]//div'); // Adjusted to select child divs if options are inside them
    for (const option of getListdrop) {
      const text = await option.getText();
      if (text === " New Zealand tour of India") {
        await option.click(); // Click the desired option
        await browser.pause(4000);
        break;
      }
    }

    console.log("Selected the dropdown option successfully");
    await browser.pause(4000); // Optional pause for observation
  });
  it("selects an option from dropdown and verifies in input field", async function () {
    // Step 1: Click on the input field to open the dropdown
    const inputField = await $(
      '//*[@id="root"]/div/div/div[1]/div[3]/div[2]/div/div[2]/form/div[1]/div[4]/div/div[1]'
    );
    await inputField.click(); // Open dropdown options
    await browser.pause(2000); // Optional pause to allow options to appear

    // Step 2: Select the desired option
    const options = await $$('//*[@id="react-select-2-listbox"]//div'); // Adjusted selector for all options
    for (const option of options) {
      const text = await option.getText();
      if (text === "Bangladesh tour of India") {
        // Select based on visible text
        await option.click();
        break;
      }
    }

    // Step 3: Verify the selected option appears in the input field
    const selectedText = await inputField.getValue();
    console.log("Selected option in input field:", selectedText); // Optional: logs the selected option text
    expect(selectedText).toBe("Option 2"); // Verifies the input field contains "Option 2"
  });
});

//*[@id="react-select-2-option-0"]
//*[@id="react-select-2-option-1"]
