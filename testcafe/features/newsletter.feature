Feature: newsletter subscription

As a user, I want to fill in my email adress,
so that I can subscribe to the newsletter.

    Scenario: Sign up for newsletter with correct email adress
        Given I am on the home page
        When I fill in the sign up for newsletter form with my "test@test.nl" email adress
        And click on subscribe
        Then the "thank you" message will show up

    Scenario: Sign up for newsletter with incorrect email adress
        Given I am on the home page
        When I fill in the sign up for newsletter form with my "incorrect" email adress
        And click on subscribe
        Then the "error" message will show up

     

