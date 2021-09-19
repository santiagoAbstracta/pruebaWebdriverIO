import homePage from "../pages/home.page";
import extraData from "../data/extraData";
import helper from "../utils/helpers";
import subscribeToNewsletterData from "../data/subscribeToNewsLetterData"

describe("Subscribe to Newsletter", () => {
  it("Should enter the email to subscribe to a Newsletter and verify that we still in home page and a success message is displayed", async () => {
    
    await homePage.subscribeToNewsletter(subscribeToNewsletterData.email)

    assert.equal(await helper.getBrowserUrl(), extraData.pageURLs["homePage"],'Error: The URL is not the expected');
    assert.equal(await helper.getBrowserTitle(), extraData.pageTitles["homePage"],'Error: The page title is not the expected');
    assert.equal(await homePage.getSuccessMessage(), subscribeToNewsletterData.assertionMessage,'Error: Success message is not being displayed');

  });
});

  