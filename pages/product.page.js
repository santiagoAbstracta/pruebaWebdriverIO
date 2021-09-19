import BasePage from "../pages/base.page";

class ProductPage extends BasePage {
  
  //Web Elements
  productNameInCart(productName) {
    return $(`//a[@title='${productName}'][@class="cart_block_product_name"]`);
  }

  get productNameTitle() {
    return $("h1");
  }

  get addToCart() {
    return $("//*[@name='Submit']");
  }

  get successMessage() {
    return $("h2");
  }

  get closePopUpWindow() {
    return $("//*[@title='Close window']");
  }
  get cart() {
    return $("//*[@title='View my shopping cart']");
  }

  //-------------------------------------------------------------------------------------------------------//

  /**
   * Get the title of the product page
   */
  async getTitleOfProduct() {
    addStep("Get name of product in product page");
    return await super.getTextOfElement(await this.productNameTitle);
  }

  /**
   * Add current product to the cart
   */
  async addProductToCart() {
    addStep("Add product to the cart");
    await super.clickOnElement(await this.addToCart);
  }

  /**
   * Get success message after adding product to cart
   */
  async getSuccessMessage() {
    addStep("Get success message after adding the product to the cart");
    return await super.getTextOfElement(await this.successMessage);
  }

  /**
   * Close popup after adding product to cart
   */
  async closePopUp() {
    addStep("Close product pop up");
    await super.clickOnElement(await this.closePopUpWindow);
  }

  /**
   * Open cart list
   */
  async viewCart() {
    addStep("View cart");
    await super.moveToElement(await this.cart);
  }

  /**
   * Verify if product is in the cart
   * @param {string} productName that is in the cart
   */
  async productPresentInCart(productName) {
    addStep("Verify if product is in the cart");
    return await this.productNameInCart(productName).isDisplayed();
  }
}

export default new ProductPage();
