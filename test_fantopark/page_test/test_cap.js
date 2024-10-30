import { single_click } from "../common_action/action";
import Enquire from "../page_list/Enquire";

describe("Open the browser and perform actions", function () {
  before(async function () {
    await browser.url("https://www.fantopark.club/");
    await browser.maximizeWindow();
    await browser.pause(500);
  });

  it("verify the individual tournament Enquire is clickable", async function () {
    let clickEnq = await $(
      '//*[@id="root"]/div/div/div[2]/div/main/div/div[5]/div[2]/div/div[1]/div/div[1]/div/div[2]/div[2]/button'
    );
    // '//*[@id="root"]/div/div/div[2]/div/main/div/div[2]/div[2]/div/div/div/div[1]/div/div[2]/div[2]/button'
    await single_click(clickEnq);
    expect(await clickEnq.isClickable()).toBe(true);
    // await browser.pause(1000);
  });

  //   it("verify the tour for 2 persons is added", async function () {
  //     let addPerson = await $(
  //       '//*[@id="root"]/div/div/div[2]/div/main/div[3]/div/div[2]/div/div[2]/div[2]/div[2]/div/div[2]/button[2]'
  //     );
  //     await single_click(addPerson);
  //     expect(await addPerson.isClickable()).toBe(true);
  //     await browser.pause(2000);
  //   });

  //   it("verify additional service is added", async function () {
  //     let addService = await $(
  //       '//*[@id="root"]/div/div/div[2]/div/main/div[3]/div/div[2]/div/div[2]/div[3]/div[2]/div/ul/li[1]/label'
  //     );
  //     await single_click(addService);
  //     expect(await addService.isSelected()).toBe(true);
  //     await browser.pause(2000);
  //   });

  it("verify proceed to book button is clickable", async function () {
    let proceedButton = await $(
      '//*[@id="root"]/div/div/div[2]/div/main/div[4]/div/div[2]/div/div[2]/div[6]/button'
    );
    //*[@id="root"]/div/div/div[2]/div/main/div[4]/div/div[2]/div/div[2]/div[6]/button
    //*[@id="root"]/div/div/div[2]/div/main/div[4]/div/div[2]/div/div[2]/div[6]/button

    await single_click(proceedButton);
    expect(await proceedButton.isClickable()).toBe(true);
    // await browser.pause(1000);
  });

  it("verify user enters their name", async function () {
    await Enquire.username.setValue("shubham");
    expect(await Enquire.username.getValue()).toBe("shubham");
    // await browser.pause(1000);
  });

  it("verify user enters their email", async function () {
    await Enquire.email.setValue("shubhamagrwal@gmail.com");
    expect(await Enquire.email.getValue()).toBe("shubhamagrwal@gmail.com");
    await browser.pause(1000);
  });

  it("verify user enters their phone number", async function () {
    await Enquire.phone.setValue("8768181912");
    expect(await Enquire.phone.getValue()).toBe("8768181912");
    // await browser.pause(1000);
  });

  it("verify user enters referral code", async function () {
    await Enquire.referral.setValue("123");
    expect(await Enquire.referral.getValue()).toBe("123");
    // await browser.pause(1000);
  });

  it("verify checkbox is checked", async function () {
    let check = await $(
      '//*[@id="root"]/div/div/div[2]/div/main/div[5]/div[2]/div/div[2]/form/div[3]/label'
    );
    //*[@id="root"]/div/div/div[2]/div/main/div[5]/div[2]/div/div[2]/form/div[3]/label
    await single_click(check);
    expect(await check.isSelected()).toBe(true);
    // await browser.pause(1000);
  });

  it("verify proceed button is clickable", async function () {
    let proceedButton = await $(
      '//*[@id="root"]/div/div/div[2]/div/main/div[5]/div[2]/div/div[2]/form/div[5]/button'
    );
    await single_click(proceedButton);
    expect(await proceedButton.isClickable()).toBe(true);
    await browser.pause(500);
  });
});
