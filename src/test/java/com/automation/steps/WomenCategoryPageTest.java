package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class WomenCategoryPageTest {
    @When("^I click on Women link$")
    public void iClickOnWomenLink() {
        new HomePage().clickOnWomenHeader();
    }

    @Then("^I should see the women message \"([^\"]*)\"$")
    public void iShouldSeeTheWomenMessage(String message) {
        Assert.assertEquals("Page not found", message, new WomenCategoryPage().getWomenText());

    }

    @And("^I click on product \"([^\"]*)\"from product$")
    public void iClickOnProductFromProduct(String product) {
        new WomenCategoryPage().selectProduct(product);

    }

    @And("^I click on quantity \"([^\"]*)\"from quntity$")
    public void iClickOnQuantityFromQuntity(String quantity) {
        new ProductPage().clearQuantity();
        new ProductPage().enterQuantity(quantity);


    }

    @And("^I click on size \"([^\"]*)\"from size$")
    public void iClickOnSizeFromSize(String size) {
        new ProductPage().selectSize(size);

    }

    @And("^I click on colour \"([^\"]*)\"from colour$")
    public void iClickOnColourFromColour(String colour) {
        new ProductPage().selectColour(colour);

    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().clickOnAddToCart();
    }

    @Then("^I should see the product message \"([^\"]*)\"$")
    public void iShouldSeeTheProductMessage(String message) throws InterruptedException {
        Thread.sleep(300);
        try {
            Assert.assertEquals("Page not found", message, new ProductPage().verifyProductAddedToCartMessage());
        } catch (Exception d) {
            //
        }

    }

    @And("^I click on close button$")
    public void iClickOnCloseButton() {
        new ProductPage().clickOnCloseButton();
    }
}
