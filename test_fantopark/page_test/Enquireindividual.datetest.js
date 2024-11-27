import { single_click } from "../common_action/action";
import Enquire from "../page_list/Enquire";
import allureReporter from "@wdio/allure-reporter";

describe("Open the browser and verify the individual Inquiry of the leads,", function () {
  before(async function () {
    allureReporter.addFeature("webside Module");
    allureReporter.addStory("Open the brower");
    allureReporter.addStep("Navigate to Fantopark website");
    await browser.url("http://fantoparkdev.com/");
    await browser.maximizeWindow();
    await browser.pause(2000);
  });

  it("verify the individual tournament Enquire is clickable", async function () {
    allureReporter.addStep("verify the URL with title name");
    let clickEnq = await $('//*[@id="trips_button"]');
    //*[@id="trips_button"]
    //  '//*[@id="root"]/div/div/div[2]/div/main/div/div[2]/div[2]/div/div/div/div[1]/div/div[2]/div[2]/button'
    await single_click(clickEnq);
    // expect(await clickEnq.isClickable()).toBe(true);
    await browser.pause(2000);
  });
  //  <----------------tour details---------------->
  it("verify tour plans taps", async function () {
    allureReporter.addStep("verify the URL with title name");
    // Find all div elements with the same ID
    const divElements = await $$('//*[@id="tour_list"]');

    // Get the count of matching elements
    const count = divElements.length;
    console.log(`Total Divs with ID "duplicate-id": ${count}`);

    // Loop through each div and perform an action
    for (let i = 0; i < count; i++) {
      console.log(`Performing action on Div #${i + 1}`);
      await browser.pause(1000);
      // Example: Get text content of each div
      const text = await divElements[i].getText();
      console.log(`Text of Div #${i + 1}:`, text);
      await browser.pause(1000);
      // Example: Click on each div
      await divElements[i].click();
    }
  });
  it("verify Freuestly asked Question taps", async function () {
    allureReporter.addStep("verify the URL with title name");
    // Find all div elements with the same ID
    const divElements = await $$('//*[@id="asked_question"]');

    // Get the count of matching elements
    const count = divElements.length;
    console.log(`Total Divs with ID "duplicate-id": ${count}`);

    // Loop through each div and perform an action
    for (let i = 0; i < count; i++) {
      console.log(`Performing action on Div #${i + 1}`);
      await browser.pause(1000);
      // Example: Get text content of each div
      const text = await divElements[i].getText();
      console.log(`Text of Div #${i + 1}:`, text);
      await browser.pause(1000);
      // Example: Click on each div
      await divElements[i].click();
    }
  });
  // <-----------------to fill form-------------------->
  // <-------Add_calc----->
  it("verify the tour for 2 persons is added", async function () {
    allureReporter.addStep("verify the URL with title name");
    let addPerson = await $('//*[@id="person_add"]');
    //*[@id="root"]/div/div/div[2]/div/main/div[3]/div/div[2]/div/div[2]/div[2]/div[2]/div/div[2]/button[2]
    //*[@id="person_add"]
    await single_click(addPerson);
    await single_click(addPerson);
    expect(await addPerson.isClickable()).toBe(true);
    await browser.pause(1000);
  });

  it("verify subitional service ", async function () {
    allureReporter.addStep("verify the URL with title name");
    let addService = await $('//*[@id="person_sub"]');
    //*[@id="person_add"]
    //*[@id="root"]/div/div/div[2]/div/main/div[3]/div/div[2]/div/div[2]/div[3]/div[2]/div/ul/li[1]/label
    await single_click(addService);
    // expect(await addService.isSelected()).toBe(true);
    await browser.pause(1000);
  });
  it("verify subitional service ", async function () {
    allureReporter.addStep("verify the URL with title name");
    let addService = await $('//*[@id="additional_service"]');
    //*[@id="additional_service"]
    await single_click(addService);
    expect(await addService.isSelected()).toBe(true);
    await browser.pause(1000);
  });

  it("verify proceed to book button is clickable", async function () {
    allureReporter.addStep("verify the URL with title name");
    let proceedButton = await $('//*[@id="final_book"]');
    //*[@id="final_book"]
    //*[@id="root"]/div/div/div[2]/div/main/div[3]/div/div[2]/div/div[2]/div[6]/button
    await single_click(proceedButton);
    // expect(await proceedButton.isClickable()).toBe(true);
    await browser.pause(1000);
  });

  it("verify user enters their name", async function () {
    allureReporter.addStep("verify the URL with title name");
    await Enquire.username.setValue("shubham");
    expect(await Enquire.username.getValue()).toBe("shubham");
    await browser.pause(1000);
  });

  it("verify user enters their email", async function () {
    allureReporter.addStep("verify the URL with title name");
    await Enquire.email.setValue("shubhamagrwal@gmail.com");
    expect(await Enquire.email.getValue()).toBe("shubhamagrwal@gmail.com");
    await browser.pause(1000);
  });

  it("verify user enters their phone number", async function () {
    allureReporter.addStep("verify the URL with title name");
    // await Enquire.phone.setValue("8768181912");
    let phone_path = $('//input[@class="iti__tel-input"]');
    // '//*[@id="root"]/div/div/div[1]/div[3]/div[2]/div/div[2]/form/div[1]/div[3]/div/div/input'
    await phone_path.waitForDisplayed({ timeout: 5000 });
    phone_path.click();
    // phone_path.click();
    await browser.pause(1000);
    phone_path.setValue("8768181912");

    // expect(await Enquire.phone_path.getValue()).toBe("8768181912");
    await browser.pause(2000);
  });
  // *[@id="root"]/div/div/div[1]/div[3]/div[2]/div/div[2]/form/div[1]/div[3]/div/div/input
  it("verify user enters referral code", async function () {
    allureReporter.addStep("verify the URL with title name");
    await Enquire.referral.setValue("123");
    expect(await Enquire.referral.getValue()).toBe("123");
    await browser.pause(1000);
  });
  // Noida, Gautam Buddha Nagar, Uttar Pradesh, IND
  it("verify user Location", async function () {
    allureReporter.addStep("verify the URL with title name");
    await Enquire.Location.setValue(
      "Noida, Gautam Buddha Nagar, Uttar Pradesh, IND"
    );
    expect(await Enquire.Location.getValue()).toBe(
      "Noida, Gautam Buddha Nagar, Uttar Pradesh, IND"
    );
    await browser.pause(1000);
  });

  it("verify checkbox is checked", async function () {
    allureReporter.addStep("verify the URL with title name");
    let checkbox = $('//*[@id="enquire_checkbox"]'); //*[@id="enquire_checkbox"]
    single_click(checkbox);
    await browser.pause(1000);

    // expect(await check.isSelected()).toBe(true);
  });

  it("verify proceed button is clickable", async function () {
    allureReporter.addStep("verify the URL with title name");
    let sumit_button = $('//*[@id="submit_enquire_button"]');
    //*[@id="enquire_checkbox"]
    single_click(sumit_button);

    // expect(await proceedButton.isClickable()).toBe(true);
    await browser.pause(1000);
  });
});

//*[@id="root"]/div/div/div[2]/div/main/div[4]/div[2]/div/div[2]/form/div[1]/div[3]/div/div/input
