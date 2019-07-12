Feature: Logout
  Scenario: logout a truck driver
    Given  user in the login page
    When user logs in with "user156" and "UserUser123"
    Then page title should be "Dashboard"
    When user click on name his name
    When click on logout button
    Then page title should be "Login"

  Scenario: logout a sales manager
    Given  user in the login page
    When user logs in with "salesmanager255" and "UserUser123"
    Then page title should be "Dashboard"
    When user click on name his name
    When click on logout button
    Then page title should be "Login"

  Scenario: logout a store manager
    Given  user in the login page
    When user logs in with "storemanager89" and "UserUser123"
    Then page title should be "Dashboard"
    When user click on name his name
    When click on logout button
    Then page title should be "Login"