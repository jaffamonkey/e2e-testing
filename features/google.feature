@search @ci
Feature: Google Search tagged

  @google
  Scenario: Searching Google
    Given I open Google's search page
    Then the title is "Google"
      And the Google search form exists

