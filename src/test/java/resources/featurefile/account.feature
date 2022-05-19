@test
Feature: Account Functionality Test
  Scenario:I should create account successfully
    Given I am on homepage
    When I click on Sign in link
    And  I enter the  Email "Prime1214@gmail.com"
    And  I click on Account Create
    And  I click on Account gender
    And  I enter account First name "Pooja"
    And  I enter account Last name  "Patel"
    And  I enter  account Password "Prime456"
    And  I select the Birthdate  "28"
    And  I select Birthmonth "12"
    And  I select Birthyear "1999"
    And  I enter First name "Mrs Pooja"
    And  I enter Last name  "Patel"
    And  I enter Company Name "Prime Testing"
    And  I enter Address First line "10,west town"
    And  I enter City "Arizona"
    And  I enter  State "Arizona"
    And  I enter Zipcode "12345"
    And  I enter Country "United States"
    And  I enter Additional information "Please send the confirmation email."
    And  I enter  Homephone "9824054322"
    And  I enter  Mobilephone "986794322"
    And  I enter Assign address "10,Liverpool Street"
    And  I click on Register button
    Then I should see the message "MY ACCOUNT" myaccount
    And I should see the authentification message "AUTHENTICATION"

