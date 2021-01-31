import { Given, When } from 'cucumber';
import { Environment, Parameters } from '../../environment';
import HomePage from '../page-objects/home.po';

const parameters: Parameters = Environment.getEnvironmentParameters(
  'demo-webshop'
);

// TODO: 1
// Create a variable url with the url from parameters.


Given('I am on the home page', async (t: TestController) => {
  // TODO: 2
  // add a navigateTo too the step 'I am on the home page'
  // navigateTo has to go to the url variable.

});

When('I navigate to the login page', async (t: TestController) => {
  await t.click(HomePage.buttonInloggen);
});

When('refresh the page', async (t: TestController) => {
  await t.eval(() => location.reload());
});

