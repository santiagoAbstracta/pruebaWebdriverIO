function generatetodayTime() {
  let today = new Date();
  return (
    today.getFullYear().toString() +
    today.getMonth().toString() +
    today.getDate().toString() +
    today.getHours().toString() +
    today.getMinutes().toString() +
    today.getSeconds().toString()
  );
}

module.exports = {
  async getPageHeader() {
    addStep("Get current page header");
    let header = await $(".page-heading");
    await header.waitForDisplayed({ timeout: 5000 });
    return await header.getText();
  },

  async getBrowserTitle() {
    addStep("Get current browser title");
    return await browser.getTitle();
  },

  async getBrowserUrl() {
    addStep("Get current browser URL");
    return await browser.getUrl();
  },
  generatetodayTime,
};
