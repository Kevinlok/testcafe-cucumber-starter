import { Then, When } from 'cucumber';
import HomePage from './page-objects/home.po';

// TODO: 4
// Create a parameter email with the string value from the cucumber step. 
// Hint: After the t: TestController in an array. 
When(
  'I fill in the sign up for newsletter form with my {string} email adress',
  async (t: TestController) => {
    // TODO: 5 
    // Use a typeText to fill in the email in the newsletterEmailInput page object.
  }
);

When('click on subscribe', async (t: TestController) => {
  // TODO: 7
  // click on the newsLetterSubscribeButton.
});

Then(
  'the {string} message will show up',
  async (t: TestController, [message]) => {
    await t.expect(HomePage.newsLetterResultBlock.exists).ok();

    // TODO: 8
    // create the following if statement: if message is thank you then check if newsLetterResultBlock textContent contains 'Thank you for signing up! A verification email has been sent.'
    // if message is error then check if newsLetterResultBlock textContent contains 'Enter valid email'
    
  }
);
