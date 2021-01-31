import { When, Then } from 'cucumber';
import LoginPage from './page-objects/login.po';

When(
  'enter my {string} credentials',
  async (t: TestController, [correctIncorrect]) => {
    interface credentials {
      email: string;
      password: string;
    }

    const correctCreds: credentials = {
      email: 'TestCafe1@test.nl',
      password: 'Test123'
    };

    const wrongCreds: credentials = {
      email: 'TestCafeFalse@test.nl',
      password: 'Test1234'
    };

    if (correctIncorrect === 'correct') {
      await t
        .typeText(LoginPage.EmailField, correctCreds.email)
        .typeText(LoginPage.PasswordField, correctCreds.password);
    } else {
      await t
        .typeText(LoginPage.EmailField, wrongCreds.email)
        .typeText(LoginPage.PasswordField, wrongCreds.password);
    }
    await t.click(LoginPage.LoginButton);
  }
);

Then('there will be a log out button present', async (t: TestController) => {
  await t.expect(LoginPage.LogOutButton.exists).ok();
});
