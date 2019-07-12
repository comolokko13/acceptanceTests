package com.step_definitions;

import com.pages.LoginPage;
import com.utilities.Driver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPageStepDefinitions {
    @When("user logs in with {string} and {string}")
    public void user_logs_in_with_and(String userName, String password) {
        System.out.println("User Logs in with \"" + userName + "\"");
        LoginPage loginPage = new LoginPage();
        loginPage.userName.sendKeys(userName);
        loginPage.password.sendKeys(password);
        loginPage.loginButton.click();
    }

    @Then("page title should be {string}")
    public void page_title_should_be(String titleExpected) {
        System.out.println("homepage displayed");
        String titleActuall = Driver.getDriver().getTitle();
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(),5);
        wait.until(ExpectedConditions.titleIs(titleExpected));
        Assert.assertEquals(titleExpected, titleActuall);

    }
   @Given("user in the login page")
    public void user_in_the_login_page() {
        System.out.println("Login page displaying");
        Driver.getDriver().get("http://qa2.vytrack.com/");
    }




}