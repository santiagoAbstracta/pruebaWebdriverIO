import contactUsPage from "../pages/contactUs.page";
import extraData from "../data/extraData";
import helper from "../utils/helpers";
import contactUsData from "../data/contactUsData"

const path = require('path');

describe("Send contact Us form", () => {
  it("Should go to contact us page", async () => {
    await contactUsPage.goToContactUsPage();

    assert.equal(await helper.getBrowserUrl(), extraData.pageURLs["contactUs"],'Error: The URL is not the expected');
    assert.equal(await helper.getBrowserTitle(), extraData.pageTitles["contactUs"],'Error: The page title is not the expected');
    assert.equal(await helper.getPageHeader(), extraData.pageHeaders["contactUs"],'Error: The page header is not the expected');

  });
  it("Should complete contact us form", async () => {
    await contactUsPage.completeContactUsForm(contactUsData.subjectHeading, contactUsData.email, contactUsData.orderReference, contactUsData.message, path.join(__dirname, contactUsData.directoryName));

    assert.equal(await contactUsPage.getSuccessMessage(), contactUsData.assertionMessage,"Error: The contact us form was not completed correctly");

  });
});

  
  
 
  
  
  