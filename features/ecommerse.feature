

Feature: Ecommerce Validation

Scenario: validate Order create in the site
Given login to the site with "standard_user" and "secret_sauce"
When clicking the add to cart for "Sauce Labs Backpack, Sauce Labs Bolt T-Shirt, Sauce Labs Onesie"
Then check product added to the cart

