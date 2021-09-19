import BasePage from "../pages/base.page";

class LoginPage extends BasePage {

  //WebElements of the register pre form that appears in the Login Page
  get registryPreForm() {
    return $("#create-account_form");
  }

  get emailRegistryPreForm() {
    return $("#email_create");
  }

  get createAnAccount() {
    return $("#SubmitCreate");
  }

  //WebElements related to the login form
  get emailLogin() {
    return $("#email");
  }

  get password() {
    return $("#passwd");
  }

  get signIn() {
    return $("#SubmitLogin");
  }

  get errorMessage() {
    return $("//*[@class='alert alert-danger']/ol/li");
  }

  //-------------------------------------------------------------------------------------------------------//

  /**
   * Complete the register pre form that appears in the Login Page
   * @param {String} email
   */
  async completeRegisterPreForm(email) {
    addStep(`Complete the register "pre" form with the following email: ${email}`);
    await super.clearValueAndSetText(await this.emailRegistryPreForm, email);
    await super.clickOnElement(await this.createAnAccount);
  }

  /**
   * Visual regression for the register pre form that appears in the Login Page
   */
  async visualRegressionRegistryPreForm() {
    addStep(`Do visual regression for register pre form`);
    return await super.visualRegression(await this.registryPreForm,"registerPreForm");
  }

  //----//

  /**
   * Complete login form
   * @param {String} email
   * @param {String} password
   */
  async login(email, password) {
    addStep(`Login with the following email: ${email}`);
    await super.clearValueAndSetText(await this.emailLogin, email);
    await super.clearValueAndSetText(await this.password, password);
    await super.clickOnElement(await this.signIn);
  }

  /**
   * Get error message of alert in login page
   */
  async getErrorMessage() {
    addStep("Get error message");
    return await super.getTextOfElement(await this.errorMessage);
  }
}

export default new LoginPage();
