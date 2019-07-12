package com.runners;


import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
        plugin = {"html:target/default-cucumber-reports",
                  "json:target/cucumber.json"},
        features = "src/test/resources/features/loginPage.feature",
        glue = "com/step_definitions",
        dryRun = true,
        tags = "@wip"
)

public class CukesRunner {
}
