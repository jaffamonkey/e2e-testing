@ci @login @iostest
Feature: Checking login

Scenario: Checking login
    Given I am logged in as valid user
    And I log out of website
