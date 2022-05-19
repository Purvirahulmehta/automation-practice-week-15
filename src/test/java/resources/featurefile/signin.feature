@test
Feature: SignIn Functionality Test

  Scenario: I should navigate to signIn page successfully
    Given I am on homepage
    When I click on signIn link
    Then I should see the authentification message "AUTHENTICATION"

  Scenario Outline: I should see the error message with InValid credentials
    Given I click on signIn link
    And I enter username "<username>"
    And I enter password "<password>"
    And I click on signIn button
    Then I should see the  error message "<message>"
    Examples:
      | username       | password | message                    |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |


  Scenario: User should logIn successfully with valid credentials
    Given  I click on signIn link
    And I enter username "prime1212@gmail.com"
    And I enter password "Prime456"
    And I click on signIn button
    Then I should see the signOut "Sign out" link


  Scenario: User should Logout SuccessFully
    Given  I click on signIn link
    And I enter username "prime1212@gmail.com"
    And I enter password "Prime456"
    And I click on signIn button
    And I click on signout link
    Then I should see the "Sign in" link on top menu

