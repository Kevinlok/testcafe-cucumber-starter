import { Selector } from 'testcafe';

class LoginPage {
  EmailField: Selector = Selector('.email');
  PasswordField: Selector = Selector('.password');
  LoginButton: Selector = Selector('input').withAttribute('value', 'Log in');
  LogOutButton: Selector = Selector('.ico-logout');
}
export default new LoginPage();
