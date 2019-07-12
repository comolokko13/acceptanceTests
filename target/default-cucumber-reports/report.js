$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\loginPage.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "name": "login as a \"\u003cuser\u003e\"",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user in the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs in with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "page title should be \"Dashboard\"",
  "keyword": "Then "
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "truck driver",
        "user156",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "sales manager",
        "salesmanager255",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "store manager",
        "storemanager89",
        "UserUser123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login as a \"truck driver\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with \"user156\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page title should be \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefinitions.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefinitions.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login as a \"sales manager\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with \"salesmanager255\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page title should be \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefinitions.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefinitions.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login as a \"store manager\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with \"storemanager89\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page title should be \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefinitions.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefinitions.close_browser()"
});
formatter.result({
  "status": "passed"
});
});