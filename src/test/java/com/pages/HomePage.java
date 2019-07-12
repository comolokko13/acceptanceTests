package com.pages;

import com.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
    public HomePage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//li[@id='user-menu']/a")
    public WebElement nameOnTheLeft;


    @FindBy(xpath = "//a[text()='Logout']")
     public  WebElement logoutButton;
}

//h1[text()='Search Results']//parent::div//div[@class='bkWMgd'][1]//div[@class='r']//h3//parent::a