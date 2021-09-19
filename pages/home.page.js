import BasePage from "../pages/base.page";

class HomePage extends BasePage {
  //WebElements
  get searchInput() {
    return $('[id="search_query_top"]');
  }

  get newsletterEmail() {
    return $("#newsletter-input");
  }

  //-------------------------------------------------------------------------------------------------------//

  /**
   * Set the product in the search input and press enter
   * @param {String} product to be searched
   */
  async search(product) {
    addStep(`Search product: ${product}`)
    await super.clearValueAndSetText(await this.searchInput, product);
    (await this.searchInput).keys("Enter");
  }

  /**
   * Set the email in the Newsletter input and press enter
   * @param {String} email
   */
  async subscribeToNewsletter(email) {
    addStep(`Subscribe to Newsletter with the following email: ${email}`)
    await super.clearValueAndSetText(await this.newsletterEmail, email);
    (await this.newsletterEmail).keys("Enter");
  }
}

export default new HomePage();
