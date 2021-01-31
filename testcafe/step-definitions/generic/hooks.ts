import { After } from 'cucumber';
import CustomerInfoPage from '../page-objects/customer-info.po';

After('@post-changeCustomerInfo', async (t: TestController) => {
  await t
    .typeText(CustomerInfoPage.FirstnameField, 'Kevin', {
      replace: true
    })
    .typeText(CustomerInfoPage.LastnameField, 'Lok', {
      replace: true
    })
    .click(CustomerInfoPage.SaveButton);
});
