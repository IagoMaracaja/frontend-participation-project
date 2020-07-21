import {$, element, by, protractor, browser} from 'protractor';
const helper = require('protractor-helper');

export class UserPage {

  // Page Elements
  firstNameField = element(by.id('firstName-field'));
  lastNameField = element(by.id('lastName-field'));
  participationField = element(by.id('participation-field'));
  form = element(by.id('formId'));

  // Divs
  lastNameDivError = element(by.id('lastNameErrorId'));

  getHome(){
    browser.get(browser.baseUrl);
  }

  addNewParticipation(firstName, lastName, participation){
    this.firstNameField.sendKeys(firstName);
    this.lastNameField.sendKeys(lastName);
    this.participationField.sendKeys(participation);

    this.form.submit();
  }

}
