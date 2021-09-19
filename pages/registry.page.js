import BasePage from "../pages/base.page";

class RegistryPage extends BasePage {
  //WebElements

  get radioMaleGender() {
    return $("#id_gender1");
  }

  get radioFemaleGender() {
    return $("#id_gender2");
  }

  get firstName() {
    return $("#customer_firstname");
  }

  get lastName() {
    return $("#customer_lastname");
  }

  get password() {
    return $("#passwd");
  }

  get dayOfBirth() {
    return $("#days");
  }

  get monthOfBirth() {
    return $("#months");
  }

  get yearOfBirth() {
    return $("#years");
  }

  get subscribeToNewsletter() {
    return $("#newsletter");
  }

  get receiveOffers() {
    return $("#optin");
  }

  get firstNameAddress() {
    return $("#firstname");
  }

  get lastNameAddress() {
    return $("#lastname");
  }

  get companyName() {
    return $("#company");
  }

  get address() {
    return $("#address1");
  }

  get address2() {
    return $("#address2");
  }

  get city() {
    return $("#city");
  }
  get state() {
    return $("#id_state");
  }
  get zipPostalCode() {
    return $("#postcode");
  }
  get country() {
    return $("#id_country");
  }

  get additionalInfo() {
    return $("#other");
  }

  get homePhone() {
    return $("#phone");
  }

  get mobilePhone() {
    return $("#phone_mobile");
  }
  get addressAlias() {
    return $("#alias");
  }

  get register() {
    return $("#submitAccount");
  }

  //-------------------------------------------------------------------------------------------------------//

  /**
   * Complete register form
   * @param {object} data -> It contains all register form values
   */
  async completeRegisterForm(data) {
    addStep("Complete register form");
    
    /*YOUR PERSONAL INFORMATION*/
    await super.clickOnElement(data.title === "Mrs." ? await this.radioMaleGender : await this.radioFemaleGender);
    await super.clearValueAndSetText(await this.firstName, data.firstName);
    await super.clearValueAndSetText(await this.lastName, data.lastName);
    await super.clearValueAndSetText(await this.password, data.password);
    await super.selectElementByAttribute(await this.dayOfBirth,data.dayOfBirth);
    await super.selectElementByAttribute(await this.monthOfBirth,data.monthOfBirth);
    await super.selectElementByAttribute(await this.yearOfBirth,data.yearOfBirth);
    if (data.subscribeToNewsletter) {await this.subscribeToNewsletter.click();};
    if (data.receiveOffers) {await this.receiveOffers.click();};

    /*YOUR ADDRESS*/
    await super.clearValueAndSetText(await this.firstNameAddress,data.firstNameAddress);
    await super.clearValueAndSetText(await this.lastNameAddress,data.lastNameAddress);
    await super.clearValueAndSetText(await this.companyName, data.companyName);
    await super.clearValueAndSetText(await this.address, data.address);
    await super.clearValueAndSetText(await this.address2, data.address2);
    await super.clearValueAndSetText(await this.city, data.city);
    await super.selectElementByVisibleText(await this.state, data.state);
    await super.clearValueAndSetText(await this.zipPostalCode,data.zipPostalCode);
    await super.selectElementByVisibleText(await this.country, data.country);
    await super.clearValueAndSetText(await this.additionalInfo,data.additionalInfo);
    await super.clearValueAndSetText(await this.homePhone, data.homePhone);
    await super.clearValueAndSetText(await this.mobilePhone, data.mobilePhone);
    await super.clearValueAndSetText(await this.addressAlias,data.addressAlias);
    await super.clickOnElement(await this.register);
  }
}

export default new RegistryPage();
