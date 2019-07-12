@wip

Feature: Login

  Scenario Outline: login as a "<user>"
    Given  user in the login page
    When user logs in with "<username>" and "<password>"
    Then page title should be "Dashboard"

 Examples:

      | user          | username        | password    |
      | truck driver  | user156         | UserUser123 |
      | sales manager | salesmanager255 | UserUser123 |
      | store manager | storemanager89  | UserUser123 |

