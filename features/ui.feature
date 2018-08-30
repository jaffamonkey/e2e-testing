Feature: UI Tests

  @google
  Scenario: Searching Google
    Given I open Google's search page
    Then the title is "Google"
    And the Google search form exists
    And I get the similarity between "heathen" and "header"

  @login
  Scenario: Checking login
    Given I am logged in as valid user
    And I log out of website
