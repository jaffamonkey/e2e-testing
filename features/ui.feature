Feature: UI Test

  @google
  Scenario: Searching Google
    Given I open Google's search page
    Then the title is "Google"
    And the Google search form exists

  @login
  Scenario: Checking login
    Given I am logged in as valid user
    And I log out of website
