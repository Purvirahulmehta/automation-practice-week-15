package com.automation.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class AccountPageTest {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }


    @Then("^I should see the message \"([^\"]*)\" myaccount$")
    public void iShouldSeeTheMessageMyaccount(String message) {
        Assert.assertEquals("Page not found ",message,new CreateAccountPage().verifyMyAccount());

    }

    @And("^I should see the authentification message \"([^\"]*)\"$")
    public void iShouldSeeTheAuthentificationMessage(String arg0) {

    }


    @And("^I enter the  Email \"([^\"]*)\"$")
    public void iEnterTheEmail(String email) {
        new CreateAccountPage().enterAccountEmail(email);


    }

    @And("^I click on Account Create$")
    public void iClickOnAccountCreate() {

        new CreateAccountPage().clickOnCreateAccoutnButton();
    }

    @And("^I click on Account gender$")
    public void iClickOnAccountGender() {

        new CreateAccountPage().clickOnGenderRadioBtn();
    }


    @And("^I enter account First name \"([^\"]*)\"$")
    public void iEnterAccountFirstName(String firstname) {
        new CreateAccountPage().enteraddresFirstname(firstname);

    }

    @And("^I enter account Last name  \"([^\"]*)\"$")
    public void iEnterAccountLastName(String lastname) {
        new CreateAccountPage().enteraddressLastname(lastname);

    }

    @And("^I enter  account Password \"([^\"]*)\"$")
    public void iEnterAccountPassword(String password) {
        new CreateAccountPage().enterPassword(password);


    }

    @And("^I select the Birthdate  \"([^\"]*)\"$")
    public void iSelectTheBirthdate(String birthdate) {
        new CreateAccountPage().selectBirthdate(birthdate);

    }

    @And("^I select Birthmonth \"([^\"]*)\"$")
    public void iSelectBirthmonth(String birthmonth) {
        new CreateAccountPage().selectBirthMonth(birthmonth);

    }

    @And("^I select Birthyear \"([^\"]*)\"$")
    public void iSelectBirthyear(String birthyear) {
        new CreateAccountPage().selectBirthYear(birthyear);


    }

    @And("^I enter First name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstname) {
        new CreateAccountPage().enterFirstName(firstname);

    }

    @And("^I enter Last name  \"([^\"]*)\"$")
    public void iEnterLastName(String lastname) {
        new CreateAccountPage().enterLastName(lastname);

    }

    @And("^I enter Company Name \"([^\"]*)\"$")
    public void iEnterCompanyName(String companyname) {
        new CreateAccountPage().enterCompanyName(companyname);

    }

    @And("^I enter Address First line \"([^\"]*)\"$")
    public void iEnterAddressFirstLine(String firstline) {
        new CreateAccountPage().enterAddressFirstLine(firstline);

    }

    @And("^I enter City \"([^\"]*)\"$")
    public void iEnterCity(String city) {
        new CreateAccountPage().enterCity(city);

    }

    @And("^I enter  State \"([^\"]*)\"$")
    public void iEnterState(String state) {
    new CreateAccountPage().selectState(state);

    }

    @And("^I enter Zipcode \"([^\"]*)\"$")
    public void iEnterZipcode(String zipcode) {
    new CreateAccountPage().enterZipCode(zipcode);

    }

    @And("^I enter Country \"([^\"]*)\"$")
    public void iEnterCountry(String country) {
    new CreateAccountPage().selectCountry(country);

    }

    @And("^I enter Additional information \"([^\"]*)\"$")
    public void iEnterAdditionalInformation(String info) {
    new CreateAccountPage().enterAdditionalInformation(info);

    }

    @And("^I enter  Homephone \"([^\"]*)\"$")
    public void iEnterHomephone(String homephone) {
    new CreateAccountPage().enterHomephone(homephone);

    }

    @And("^I enter  Mobilephone \"([^\"]*)\"$")
    public void iEnterMobilephone(String mobilephone) {
    new CreateAccountPage().enterMobilephone(mobilephone);

    }

    @And("^I enter Assign address \"([^\"]*)\"$")
    public void iEnterAssignAddress(String ref) {
    new CreateAccountPage().enterAddressfutureReference(ref);

    }

    @And("^I click on Register button$")
    public void iClickOnRegisterButton() {

        new CreateAccountPage().clickOnRegister();
    }

    @When("^I click on Sign in link$")
    public void iClickOnSignInLink() {
        new HomePage().clickOnSignInHeader();
    }
}
