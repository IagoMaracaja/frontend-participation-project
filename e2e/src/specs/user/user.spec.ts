import {UserPage} from "../../pages/user/user.page";
import {browser} from "protractor";


const userPage = new UserPage();

describe('Adding Participation', () => {

  beforeAll(() => {
    browser.waitForAngularEnabled(false);

    userPage.getHome();
  })

  it('should show error on lastName field', function () {
    browser.sleep(5000).then(
      function(){
        console.log("Waiting");
      }
    )

    userPage.addNewParticipation('Test', '', 20);
    expect(userPage.lastNameDivError.isDisplayed);

    browser.sleep(5000).then(
      function(){
        console.log("Waiting");
      }
    )

  });
});
