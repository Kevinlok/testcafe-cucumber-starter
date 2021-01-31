import { Selector } from 'testcafe';

class CustomerInfoPage {
  FirstnameField: Selector = Selector('#FirstName');
  LastnameField: Selector = Selector('#LastName');
  SaveButton: Selector = Selector('input').withAttribute(
    'name',
    'save-info-button'
  );
}
export default new CustomerInfoPage();
