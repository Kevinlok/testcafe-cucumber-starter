Feature: Customer info

    Background: Login with correct credentials 
        Given I am on the home page
        When I navigate to the login page
        And enter my "correct" credentials 
        Then there will be a log out button present

    @post-changeCustomerInfo
    Scenario: Change First and Last name of my account
        Given I am on the customer info page
        When I change my first name to "Pietje"
        And I change my last name to "Puk"
        * save my current changes 
        * refresh the page
        Then the first name field is filled in with "Pietje"
        And the last name field is filled in with "Puk"
    
    @post-changeCustomerInfo
    Scenario: Change First and Last name of my account
        Given I am on the customer info page
        When I change my first name to "Jan"
        And I change my last name to "de Boer"
        And save my current changes 
        And refresh the page
        Then the first name field is filled in with "Jan"
        And the last name field is filled in with "de Boer"

