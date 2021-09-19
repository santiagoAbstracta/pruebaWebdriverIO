import loginPage from "../pages/login.page";
import extraData from "../data/extraData";
import helper from "../utils/helpers";
import loginData from "../data/loginData";

describe("Login happy and negative cases", () => {
  loginData.invalidCredentials.forEach((loginData) => {
    it("Should NOT login, invalid credentials", async () => {
      await loginPage.goToLoginPage();
      await loginPage.login(loginData.email, loginData.password);
    
      assert.equal(await helper.getPageHeader(), extraData.pageHeaders["login"],'Error: The page header is not the expected');
      assert.equal(await loginPage.getErrorMessage(), loginData.assertionMessage,'Error: The error message is not the expected');
    });
  });
  it("Should login correctly", async () => {
    await loginPage.login(loginData.validCredentials.email, loginData.validCredentials.password);
    
    assert.equal(await helper.getBrowserUrl(),extraData.pageURLs["myAccount"],"Error: The URL is not the expected");
    assert.equal(await helper.getBrowserTitle(),extraData.pageTitles["myAccount"],"Error: The page title is not the expected");
    assert.equal(await helper.getPageHeader(),extraData.pageHeaders["myAccount"],"Error: The page header is not the expected");
  });
});
