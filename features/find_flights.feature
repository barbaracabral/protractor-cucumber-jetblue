#features/find_flights.feature
@CucumberScenario
Feature: Finding Flights in JetBlue site
    As a user of JetBlue site
    I would like to find flights
    In order to reserve a flight when I found it

    Background:
      Given I go to JetBlue index page

    Scenario Outline: Access the JetBlue page and find a flight
        And I enter the <city_from> where my flight will depart
        And I enter the <depart_date>
        And I enter the <city_to> where I will flight
        And I enter the <return_date>
        Then I see the list of the flights related to the search
    Examples:
    | city_from | depart_date | city_to | return_date |
    | "Florianópolis" | "02/01/2018" | "São Paulo" | "28/01/2018" |
