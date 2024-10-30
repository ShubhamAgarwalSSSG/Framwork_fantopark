import { single_click } from "../common_action/action";

describe("Open the browser and perform actions", function () {
  // Use before hook to open the browser and navigate to the URL
  before(async function () {
    await browser.url("http://fantoparkdev.com/");
    await browser.maximizeWindow();
  });

  it("verify the is video is clickable ", async function () {
    let first_video = $(
      '//*[@id="root"]/div/div/div[2]/div/main/div/div[5]/div[3]/div[1]/div/div'
    );
    await browser.pause(3000);
    single_click(first_video);

    // <-------------------to close the vedio-->>>
    await browser.pause(5000);
    let element = await $('//*[@id="video_close"]');

    await element.click();

    await browser.pause(5000);
  });
});

//*[@id="root"]/div/div/div[2]/div/main/div/div[5]/div[3]/div[2]/div/div
//*[@id="root"]/div/div/div[2]/div/main/div/div[5]/div[3]/div[2]/div[2]

//*[@id="movie_player"]/div[4]/button
//*[@id="movie_player"]/div[4]/button

//*[@id="root"]/div/div/div[2]/div/main/div/div[5]/div[3]/div[2]/div/div
//*[@id="root"]/div/div/div[2]/div/main/div/div[5]/div[3]/div[3]/img
