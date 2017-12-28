#features/access_tab_revenue.feature
#@CucumberScenario
Feature: Transactions related to revenues
    As a user of receivable module
    I would like to access the revenue tab
    In order to see the details of the revenues

    Scenario: Access the revenue tab
        Given I go to receivable module
        And I click on the revenue tab
        Then I see the list of the revenues
