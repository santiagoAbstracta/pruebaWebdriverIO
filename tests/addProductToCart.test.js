import homePage from "../pages/home.page";
import searchPage from "../pages/search.page";
import productPage from "../pages/product.page";
import {product}  from "../data/productsData"

describe("Search for a product, and add it to the cart", () => {
  it("Should search for the product ", async () => {
    await homePage.search(product);

    assert.equal(await searchPage.getProductNameResult(product),product,"Error: The product name of the search result is not the expected");

  });
  it("Should go to the page of the product", async () => {
    await searchPage.enterToTheResult(product);

    assert.equal(await productPage.getTitleOfProduct(), product,"Error: The product name in product page is not the expected");

  });
  it("Should add the product to the cart", async () => {
    await productPage.addProductToCart();

    assert.equal(await productPage.getSuccessMessage(), "Product successfully added to your shopping cart","Error: The product was not added to the cart");

  });
  it("Should open the cart and verify that the product was correctly added", async () => {
    await productPage.closePopUp();
    await productPage.viewCart();

    assert.equal(await productPage.productPresentInCart(product), true ,"Error: The product is not in the cart");

  });
});
