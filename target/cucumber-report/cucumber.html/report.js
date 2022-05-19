$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("womencategory.feature");
formatter.feature({
  "line": 2,
  "name": "Women Category Functionality Test",
  "description": "",
  "id": "women-category-functionality-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.before({
  "duration": 22243043200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I should navigate to WomenCategory page successfully",
  "description": "",
  "id": "women-category-functionality-test;i-should-navigate-to-womencategory-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the women message \"Women\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 764759800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 376693300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 32
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheWomenMessage(String)"
});
formatter.result({
  "duration": 20657464100,
  "status": "passed"
});
formatter.after({
  "duration": 1182361100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "I should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-functionality-test;i-should-addproducttothecartsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"\u003cproduct\u003e\"from product",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"\u003cqty\u003e\"from quntity",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"\u003csize\u003e\"from size",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"\u003ccolour\u003e\"from colour",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "women-category-functionality-test;i-should-addproducttothecartsuccessfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 22,
      "id": "women-category-functionality-test;i-should-addproducttothecartsuccessfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 23,
      "id": "women-category-functionality-test;i-should-addproducttothecartsuccessfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 24,
      "id": "women-category-functionality-test;i-should-addproducttothecartsuccessfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 25,
      "id": "women-category-functionality-test;i-should-addproducttothecartsuccessfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 26,
      "id": "women-category-functionality-test;i-should-addproducttothecartsuccessfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15487142800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "I should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-functionality-test;i-should-addproducttothecartsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Blouse\"from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"2\"from quntity",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"M\"from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"White\"from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "AccountPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 17800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 5421411100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProductFromProduct(String)"
});
formatter.result({
  "duration": 3576679300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnQuantityFromQuntity(String)"
});
formatter.result({
  "duration": 409672300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnSizeFromSize(String)"
});
formatter.result({
  "duration": 552388500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColourFromColour(String)"
});
formatter.result({
  "duration": 7217100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 80768300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheProductMessage(String)"
});
formatter.result({
  "duration": 402747400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButton()"
});
formatter.result({
  "duration": 1043293600,
  "status": "passed"
});
formatter.after({
  "duration": 1318418100,
  "status": "passed"
});
formatter.before({
  "duration": 10212757300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "I should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-functionality-test;i-should-addproducttothecartsuccessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Dress\"from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"3\"from quntity",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"L\"from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Orange\"from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "AccountPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 21300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 3294833400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProductFromProduct(String)"
});
formatter.result({
  "duration": 2555629100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnQuantityFromQuntity(String)"
});
formatter.result({
  "duration": 149892400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnSizeFromSize(String)"
});
formatter.result({
  "duration": 178548400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColourFromColour(String)"
});
formatter.result({
  "duration": 13439500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 80142200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheProductMessage(String)"
});
formatter.result({
  "duration": 362267300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButton()"
});
formatter.result({
  "duration": 1159482600,
  "status": "passed"
});
formatter.after({
  "duration": 986439100,
  "status": "passed"
});
formatter.before({
  "duration": 6587142300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "I should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-functionality-test;i-should-addproducttothecartsuccessfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Chiffon Dress\"from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"4\"from quntity",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"S\"from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Green\"from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "AccountPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 15300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 6719130800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProductFromProduct(String)"
});
formatter.result({
  "duration": 5831649000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnQuantityFromQuntity(String)"
});
formatter.result({
  "duration": 133440300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnSizeFromSize(String)"
});
formatter.result({
  "duration": 63860500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColourFromColour(String)"
});
formatter.result({
  "duration": 5371300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 84271700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheProductMessage(String)"
});
formatter.result({
  "duration": 351191100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButton()"
});
formatter.result({
  "duration": 2383448300,
  "status": "passed"
});
formatter.after({
  "duration": 929940700,
  "status": "passed"
});
formatter.before({
  "duration": 9281443300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "I should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-functionality-test;i-should-addproducttothecartsuccessfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Summer Dress with Price $28.98\"from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"2\"from quntity",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"M\"from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Blue\"from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "AccountPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 31200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 2532607900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProductFromProduct(String)"
});
formatter.result({
  "duration": 2163586400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnQuantityFromQuntity(String)"
});
formatter.result({
  "duration": 141293200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnSizeFromSize(String)"
});
formatter.result({
  "duration": 187099300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColourFromColour(String)"
});
formatter.result({
  "duration": 3158300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 78049000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheProductMessage(String)"
});
formatter.result({
  "duration": 362591100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButton()"
});
formatter.result({
  "duration": 1631669300,
  "status": "passed"
});
formatter.after({
  "duration": 928295800,
  "status": "passed"
});
});