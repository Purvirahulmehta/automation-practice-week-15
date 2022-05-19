package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SignInPageTest {
    @And("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username) {
        new SignInPage().enterEmail(username);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new SignInPage().enterPassword(password);

    }

    @And("^I click on signIn button$")
    public void iClickOnSignInButton() {
        new SignInPage().clickOnSignIn();
    }

    @Then("^I should see the  error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errormessage) {
        Assert.assertEquals("Page not foung,errorm",errormessage,new SignInPage().getErrorMsg());

    }

    @Then("^I should see the signOut \"([^\"]*)\" link$")
    public void iShouldSeeTheSignOutLink(String message) {
        Assert.assertEquals("Page not found",message,new SignInPage().verifySignOut());

    }

    @And("^I click on signout link$")
    public void iClickOnSignoutLink() {

        new SignInPage().clickOnSignOutLink();
    }

    @Then("^I should see the \"([^\"]*)\" link on top menu$")
    public void iShouldSeeTheLinkOnTopMenu(String errormessage) {
        Assert.assertEquals("Page not found",errormessage,new SignInPage().verifySignInText());

    }

    @When("^I click on signIn link$")
    public void iClickOnSignInLink() {
        new HomePage().clickOnSignInHeader();
    }
}
