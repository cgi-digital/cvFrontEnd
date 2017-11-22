# login.feature
Feature: Login check 
    A user should be able to login to CV webApp

@watch
Scenario: enter username to login page of CV webApp
    Given I go to "localhost:3000/login"
    When I enter username "myUserName"
    Then I see username "myUserName"

@watch
Scenario: try to login without providing login details 
    Given I go to "localhost:3000/login"
    When I click on Login
    Then show required fields 

@watch
Scenario: try to login with wrong user details 
     Given I go to "localhost:3000/login"
     When I enter "myUserName" for username
     When I enter password "myPassword"
     When I click on button Login
     Then show "wrong username and password combination" or "Server can not be reached"

@watch
Scenario: try to login with correct user details 
     Given I go to "localhost:3000/login"
     When I am not logged in
     When I enter "<dumyUsername>" for correct username
     When I enter password correct "<dumyPassword>"
     When I click on button correctly Login
     Then I should be logged in