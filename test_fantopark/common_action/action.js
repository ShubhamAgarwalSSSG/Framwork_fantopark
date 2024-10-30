class Element_action {
  // Single click of element for 2 seconds
  async single_click(element) {
    await element.click(); // Always use 'await' for asynchronous actions
    await browser.pause(1000); // Pause for 2 seconds
  }

  // To get the title of the current page
  async getTitlePage() {
    await browser.pause(3000); // Optional: Wait for any page load or elements if needed
    return await browser.getTitle(); // Fetch the current page title
  }
  async video_player_start() {
    await element.click(); // Always use 'await' for asynchronous actions
    await browser.pause(5000); // Fetch the current page title
  }
  async video_player_stop() {
    await browser.pause(5000);
    await element.click(); // Always use 'await' for asynchronous actions
    await browser.pause(5000); // Fetch the current page title
  }
  async onClick(element) {
    await element.waitForDisplay(); // Always use 'await' for asynchronous actions
    await element.click(); // Fetch the current page title
    await browser.pause(2000);
  }
  async setValue(element, value) {
    await element.waitForDisplay(); // Always use 'await' for asynchronous actions
    await element.click(); // Fetch the current page title
    await element.setValue(value);
  }
}

// Export an instance of the class, not the invocation of the class

export const single_click = new Element_action().single_click;
export const getTitlePage = new Element_action().getTitlePage;
