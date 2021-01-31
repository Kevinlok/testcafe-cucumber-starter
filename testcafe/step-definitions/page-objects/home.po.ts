import { Selector } from 'testcafe';

class HomePage {
  buttonInloggen: Selector = Selector('.ico-login');
  buttonRegistreren: Selector = Selector('.ico-register');
  // TODO: 3
  // Create a newsLetterEmailInput page object.

  //TODO: 6
  // Create a newsLetterSubscribeButton page object.

  newsLetterResultBlock: Selector = Selector('#newsletter-result-block');
  accountEmail: Selector = Selector('.account');
}

export default new HomePage();
