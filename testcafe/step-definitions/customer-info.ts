import { Given, When, Then } from 'cucumber';
import CustomerInfoPage from './page-objects/customer-info.po';
import HomePage from './page-objects/home.po';

Given('I am on the customer info page', async (t: TestController) => {
  await t.click(HomePage.accountEmail);
});

When(
  'I change my first name to {string}',
  async (t: TestController, [firstname]) => {
    await t.typeText(CustomerInfoPage.FirstnameField, firstname, {
      replace: true
    });
  }
);

When(
  'I change my last name to {string}',
  async (t: TestController, [lastname]) => {
    await t.typeText(CustomerInfoPage.LastnameField, lastname, {
      replace: true
    });
  }
);

When('save my current changes', async (t: TestController) => {
  await t.click(CustomerInfoPage.SaveButton);
});

Then(
  'the first name field is filled in with {string}',
  async (t: TestController, [firstname]) => {
    await t.expect(CustomerInfoPage.FirstnameField.value).eql(firstname);
  }
);

Then(
  'the last name field is filled in with {string}',
  async (t: TestController, [lastname]) => {
    await t.expect(CustomerInfoPage.LastnameField.value).eql(lastname);
  }
);
