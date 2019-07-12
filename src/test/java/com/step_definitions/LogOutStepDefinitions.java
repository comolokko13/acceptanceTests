package com.step_definitions;

import com.pages.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LogOutStepDefinitions {
    HomePage homePage = new HomePage();
    @When("user click on name his name")
    public void user_click_on_name_his_name() {
       homePage.nameOnTheLeft.click();
    }



    @When("click on logout button")
    public void click_on_logout_button() {
        homePage.logoutButton.click();

    }
}
