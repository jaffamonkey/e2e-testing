const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')


  Given(/^I open Google's search page$/, () => {
    return client
      .url('http://google.com')
      .waitForElementVisible('body', 1000);
  });

  Given(/^I open Tikkie homepage$/, () => {
    return client
        .url('https://dev.tikkie.me/')
        .waitForElementVisible('body', 1000);
  });

  Then(/^the title is "([^"]*)"$/, (title) => {
    return client.assert.title(title);
  });

  Then(/^the Google search form exists$/, () => {
      const google = client.page.google();
    return google.assert.visible('@googleSearchField');
  });

  Then(/^the Tikkie about page exists$/, () => {
    return client.assert.containsText('h1','Over Tikkie');
  });

  Then(/^I click on the link "([^"]*)"$/, (linkClass) => {
    return client.click(linkClass)
  });

  Then(/^I click on the link "([^"]*)" containing text "([^"]*)"$/, (linkClass, linkText) => {
    return client.click(linkClass)
  });

  Then(/^I am logged in as valid user$/, () => {
    return client
        .url('http://the-internet.herokuapp.com/login')
        //.click('a*=Form Authentication')
        .setValue('#username', 'tomsmith')
        .setValue('#password', 'SuperSecretPassword')
        .click('.radius')
        .assert.containsText('#flash','Your password is invalid!')
        .setValue('#username', 'tomsmith')
        .setValue('#password', 'SuperSecretPassword!')
        .click(".radius")
        .assert.containsText('#flash','You logged into a secure area!')
        .assert.containsText('h4.subheader','Welcome to the Secure Area. When you are done click logout below.')
        .click("i.icon-2x.icon-signout")
        .assert.containsText('#flash','You logged out of the secure area!')
        .end();
  });