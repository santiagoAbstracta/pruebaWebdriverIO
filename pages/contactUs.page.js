import BasePage from "../pages/base.page";

class ContactUs extends BasePage {
  //WebElements
  get subjectHeading() {
    return $("#id_contact");
  }

  get email() {
    return $("#email");
  }

  get orderReference() {
    return $("#id_order");
  }

  get attachFile() {
    return $("#fileUpload");
  }

  get message() {
    return $("#message");
  }

  get send() {
    return $("#submitMessage");
  }

  //-------------------------------------------------------------------------------------------------------//

  /**
   * Upload file in contact us form
   * @param {String} directoryName in wich the image that we want to upload is
   */
  async uploadFile(directoryName) {
    addStep("Upload file");
    const filePath = directoryName;
    const remoteFilePath = await browser.uploadFile(filePath);
    await super.setValue(await this.attachFile, remoteFilePath);
  }

  /**
   * Complete contact Us form
   * @param {String} subject
   * @param {String} email
   * @param {String} orderReference
   * @param {path} attachFile
   */
  async completeContactUsForm(subjectHeading,email,orderReference,message,directoryName) {
    addStep("Complete contact us form");
    await super.selectElementByVisibleText(await this.subjectHeading, subjectHeading);
    await super.clearValueAndSetText(await this.email, email);
    await super.clearValueAndSetText(await this.orderReference, orderReference);
    await super.clearValueAndSetText(await this.message, message);
    await this.uploadFile(directoryName);
    await super.clickOnElement(await this.send);
  }
}

export default new ContactUs();
