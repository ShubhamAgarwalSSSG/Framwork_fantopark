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
    let clickEnq = $('//*[@id="home_button"]');
    //*[@id="home_button"]
    // ('//*[@id="root"]/div/div/div[1]/div[2]/button/span');
    single_click(clickEnq);
    await browser.pause(2000);
  });

  it("verify user enter there name", async function () {
    Enquire.username.setValue("shubham");

    await browser.pause(2000);
  });
  // it("verify user enter there email", async function () {
  //   Enquire.email.setValue("shubhamagrwal@g,ail.com");

  //   await browser.pause(2000);
  // });
  // it("verify user enters their phone number", async function () {
  //   // await Enquire.phone.setValue("8768181912");
  //   let phone_path = $('//input[@class="iti__tel-input"]');
  //   // '//*[@id="root"]/div/div/div[1]/div[3]/div[2]/div/div[2]/form/div[1]/div[3]/div/div/input'
  //   await phone_path.waitForDisplayed({ timeout: 5000 });
  //   phone_path.click();
  //   // phone_path.click();
  //   await browser.pause(2000);
  //   phone_path.setValue("8768181912");

  //   // expect(await Enquire.phone_path.getValue()).toBe("8768181912");
  //   await browser.pause(2000);
  // });
  // it("verify user enter referral code", async function () {
  //   Enquire.referral.setValue("123");

  //   await browser.pause(2000);
  // });
  // it("verify user Location", async function () {
  //   await Enquire.Location.setValue(
  //     "Noida, Gautam Buddha Nagar, Uttar Pradesh, IND"
  //   );
  //   expect(await Enquire.Location.getValue()).toBe(
  //     "Noida, Gautam Buddha Nagar, Uttar Pradesh, IND"
  //   );
  //   await browser.pause(2000);
  // });
  //*[@id="custom-select_option"]/div[2]
  //*[@id="custom-select_option"]

  it("verify to select the dropdown option", async function () {
    try {
      // Step 1: Click the input field to open the dropdown
      const dropdownInput = await $('//*[@id="react-select-4-input"]');
      await dropdownInput.click();

      // Step 2: Wait for the dropdown list to appear
      const dropdownList = await $('//*[@id="react-select-4-listbox"]');
      await dropdownList.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds

      // Step 3: Wait for the specific option and select it
      const desiredOption = await $('//*[@id="react-select-4-option-0"]');
      await desiredOption.waitForDisplayed({ timeout: 5000 }); // Ensure the option is visible
      await desiredOption.click();
    } catch (error) {
      console.error("Error selecting the dropdown option:", error);
    }

    // Click to open the dropdown
    // const selectOption = await $('//*[@id="custom-select_option"]');
    // await selectOption.click(); // Click the field to open dropdown
    // await browser.pause(4000); // Pause to wait for the dropdown to open

    // Get the list of dropdown options
    // const getListdrop = await $$('//*[@id="react-select-4-listbox"]');
    // await getListdrop.waitForDisplayed({ timeout: 5000 });
    // const options = await $$('//*[@id="react-select-4-listbox"]//div');
    // await options[0].click();

    // await browser.pause(2000);
    // const getListdrop_option = await $('//*[@id="react-select-4-option-0"]');
    // // await getListdrop_option.waitForDisplayed({ timeout: 5000 });
    // await getListdrop_option.click();
    // await browser.pause(2000);
    //*[@id="react-select-2-listbox"]//div// Adjusted to select child divs if options are inside them
    // for (const option of getListdrop) {
    //   const text = await option.getText();
    //   if (text === " New Zealand tour of India") {
    //     await option.click(); // Click the desired option
    //     await browser.pause(4000);
    //     break;
    //   }
    // }
    //*[@id="react-select-4-listbox"]
    //*[@id="react-select-4-option-0"]
    console.log("Selected the dropdown option successfully", getListdrop);
    await browser.pause(4000); // Optional pause for observation
  });
  // it("selects an option from dropdown and verifies in input field", async function () {
  //   // Step 1: Click on the input field to open the dropdown
  //   const inputField = await $(
  //     '//*[@id="root"]/div/div/div[1]/div[3]/div[2]/div/div[2]/form/div[1]/div[4]/div/div[1]'
  //   );
  //   await inputField.click(); // Open dropdown options
  //   await browser.pause(2000); // Optional pause to allow options to appear

  //   // Step 2: Select the desired option
  //   const options = await $$('//*[@id="react-select-2-listbox"]//div'); // Adjusted selector for all options
  //   for (const option of options) {
  //     const text = await option.getText();
  //     if (text === "Bangladesh tour of India") {
  //       // Select based on visible text
  //       await option.click();
  //       break;
  //     }
  //   }

  //   // Step 3: Verify the selected option appears in the input field
  //   const selectedText = await inputField.getValue();
  //   console.log("Selected option in input field:", selectedText); // Optional: logs the selected option text
  //   expect(selectedText).toBe("Option 2"); // Verifies the input field contains "Option 2"
  // });
  // it("verify checkbox is clickable", async function () {
  //   let checkbox = $('//*[@id="enquire_checkbox"]'); //*[@id="enquire_checkbox"]
  //   single_click(checkbox);
  //   await browser.pause(2000);
  // });
  // // *[@id="submit_enquire_button"]
  // it("verify submit_button is clickable", async function () {
  //   let sumit_button = $('//*[@id="submit_enquire_button"]');
  //   //*[@id="enquire_checkbox"]
  //   single_click(sumit_button);
  //   await browser.pause(3000);
  // });
});

//*[@id="react-select-2-option-0"]
//*[@id="react-select-2-option-1"]
