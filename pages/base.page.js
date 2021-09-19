import url from "webdriverio/build/commands/browser/url";

const PAGE_TIMEOUT = 10000;

export default class BasePage {
  //WebElements

  get signInLink() {
    return $("a[href*='my-account']");
  }

  get contactUs() {
    return $("//*[@title='Contact Us']");
  }

  get successMessage() {
    return $("//*[@class='alert alert-success']");
  }

  get userName() {
    return $("//*[@class='account']/span");
  }

  //-------------------------------------------------------------------------------------------------------//

  /**
   * Open page
   * @param {String} route to go
   */
  async open(route) {
    await browser.url(`${route}`);
  }

  /**
   * Wait until an element is clickeable and click
   * @param {Object} element to click
   */
  async clickOnElement(element) {
    await element.waitForClickable({ timeout: PAGE_TIMEOUT });
    await element.click();
  }

  /**
   * Method to write text in an element
   * @param {Object} element that will receive the text
   * @param {String} text to introduce
   */
  async clearValueAndSetText(element, text) {
    await element.waitForClickable({ timeout: PAGE_TIMEOUT });
    await element.clearValue();
    await element.setValue(text);
  }

  /**
   * Method to set value in an element
   * @param {Object} element that will receive the text
   * @param {String} value to introduce
   */
  async setValue(element, value) {
    await element.waitForEnabled({ timeout: PAGE_TIMEOUT });
    await element.setValue(value);
  }

  /**
   * Method to get the text of an element
   * @param {Object} element that has the text
   */
  async getTextOfElement(element) {
    await element.waitForDisplayed({ timeout: PAGE_TIMEOUT });
    return await element.getText();
  }

  /**
   * Method to move to an element
   * @param {Object} element to move
   */
  async moveToElement(element) {
    await element.waitForDisplayed({ timeout: PAGE_TIMEOUT });
    await element.moveTo(1, 1);
  }

  /**
   * Method to set a value by attribute in a select
   * @param {Object} element select will receive the attribute
   * @param {String} value to introduce
   */
  async selectElementByAttribute(element, value) {
    await element.waitForEnabled({ timeout: PAGE_TIMEOUT });
    await element.selectByAttribute("value", value);
  }

  /**
   * Method to set a value by visible text in a select
   * @param {Object} element select will receive the text
   * @param {String} text to introduce
   */
  async selectElementByVisibleText(element, text) {
    await element.waitForEnabled({ timeout: PAGE_TIMEOUT });
    await element.selectByVisibleText(text);
  }

  /**
   * Method to do a visual regression
   * @param {Object} element element of which we want to take an image
   * @param {String} imgName name of the image
   */
  async visualRegression(element, imgName) {
    await element.waitForDisplayed({ timeout: PAGE_TIMEOUT });
    return await browser.checkElement(element, imgName, {});
  }

  /**
   * Method to go to login page
   */
  async goToLoginPage() {
    addStep("Go to login page");
    await this.clickOnElement(this.signInLink);
  }

  /**
   * Method to go to contac us page
   */
  async goToContactUsPage() {
    addStep("Go to contact us page");
    await this.clickOnElement(this.contactUs);
  }

  /**
   * Get success message of alert
   */
  async getSuccessMessage() {
    addStep("Get the success message");
    return await this.successMessage.getText();
  }

  /**
   * get username listed in header
   */
  async getUserNameInHeader() {
    addStep("Get user name in header");
    return await this.userName.getText();
  }
}
