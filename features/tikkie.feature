Feature: Tikkie About

  Scenario: Tikkie About Page
    Given I open Tikkie homepage
    When I click on the link ".closeButton"
    When I click on the link "a" containing text "Over Tikkie"
    Then the Tikkie about page exists
