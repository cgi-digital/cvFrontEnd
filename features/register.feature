Feature: Register check

    A user should be able to register to CV App

@watch
Scenario Outline: try to register weak/strong password
    Given I visit "localhost:3000/signup"
    When I enter "<password>" for password
    Then I should have "<strong>" password

    Examples:
        |  password  | strong |
       #|---------------------|
        | mypassword | false  |
        | myPassword | false  |
        | Mypassword | false  |
        | Mypa55word | true   |

@watch
Scenario Outline: try to register with two password
    Given I visit "localhost:3000/signup"
    When I enter my "<password>"
    When I enter my "<rePassword>" for re-password
    Then I should have "<matching>" passwords

    Examples:
        |  password  | rePassword | matching |
       #|------------------------------------|
        | mypassword | mypa55word | false    |
        | myPassword | mypassword | false    |
        | Mypassword | Mypassword | true     |
        | Mypa55word | Mypa55word | true     |

@watch
Scenario Outline: try to register with email
    Given I visit "localhost:3000/signup"
    When I enter "<Email>" for email
    Then I should have "<valid>" email

    Examples:
        |  Email         | valid |
       #|------------------------|
        | email          | false |
        | name@email     | false |
        | name@email.com | true  |

@watch
Scenario Outline: try to register with username
    Given I visit "localhost:3000/signup"
    When I enter "<firstName>" as first name
        And I enter "<lastName>" as last name
        And I enter "<username>" as username
        And I enter "<email>" as email
        And I enter "<password>" as password
        And I enter "<rePassword>" as re password
    When I click on register 
    Then I should have "<validUsername>" 

    Examples:
      |  firstName | lastName | username | email              | password | rePassword | validUsername |
     #|-----------------------------------------------------------------------------------------------|
      |  name      | name     | username | username@email.com | Pa55word | Pa55word   | false         |
        
       # enter data only with the username you know is taken 


@ignore
Scenario: try to register with new username 
    Given I visit "localhost:3000/signup"
    When I enter "name" as first name
        And I enter "name" as last name
        And I enter new username
        And I enter "user@email.com" as email
        And I enter "Pa55word" as password
        And I enter "Pa55word" as re password
    #When I click on register 
    Then I register and login to CV App

    #Examples:
    #   | firstName | lastName | email              | password | rePassword |
       #|-------------------------------------------------------------------|
    #   | name      | name     | username@email.com | Pa55word | Pa55word   |