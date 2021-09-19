import registryPage from "../pages/registry.page";
import loginPage from "../pages/login.page";
import extraData from "../data/extraData";
import data from "../data/registerData";

import helper from "../utils/helpers";


describe("Register", () => {
  it("Should go to Login page", async () => {
    await loginPage.goToLoginPage();

    assert.equal(await helper.getBrowserUrl(), extraData.pageURLs["login"],'Error: The URL is not the expected');

  });
  it("Should complete the register 'pre' form", async () => {
    await loginPage.completeRegisterPreForm(data.email);

    assert.equal(await helper.getBrowserTitle(), extraData.pageTitles["register"] ,'Error: The page header is not the expected');


  });
  it("Should complete register form and verify that we are redirected to my account page", async () => {
    await registryPage.completeRegisterForm(data);

    assert.equal(await helper.getPageHeader(),extraData.pageHeaders["myAccount"],'Error: The page header is not the expected');
    assert.equal(await registryPage.getUserNameInHeader(), `${data.firstName} ${data.lastName}` ,"Error: The user name is not the expected");

  });
});
