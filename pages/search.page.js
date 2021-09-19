import BasePage from "../pages/base.page";

class BusquedaPage extends BasePage {
  
  //Web Elements
  product(name) {
    return $(`//a[@title='${name}'][@class="product-name"]`);
  }

  //-------------------------------------------------------------------------------------------------------//

  /**
   * Go to the page of the searched product
   * @param {string} productName
   */
  async enterToTheResult(productName) {
    addStep(`Go to: ${productName} product page`)
    await super.clickOnElement(await this.product(productName));
  }

  /**
   * Get the text of the searched product result
   * @param {string} productName
   */
  async getProductNameResult(productName) {
    addStep(`Get Product Name: ${productName}`)
    return await super.getTextOfElement(await this.product(productName));
  }
}

export default new BusquedaPage();
