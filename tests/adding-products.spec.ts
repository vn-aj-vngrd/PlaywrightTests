import { test, expect } from "@playwright/test";

const BASE_URL = "https://www.saucedemo.com/";
const USERNAME = "standard_user";
const PASSWORD = "secret_sauce";

test.describe("Adding Products", () => {
  test("should add 2 products to the cart", async ({ page }) => {
    // Open the web application
    await page.goto(BASE_URL);

    // Enter valid credentials and click the login button.
    await page.getByRole("textbox", { name: "Username" }).fill(USERNAME);
    await page.getByRole("textbox", { name: "Password " }).fill(PASSWORD);
    await page.getByRole("button", { name: "Login" }).click();

    // Add one specific product (Sauce Labs Fleece Jacket) to the shopping cart.
    await page
      .locator("data-test=add-to-cart-sauce-labs-fleece-jacket")
      .click();

    // Add any one random product to the shopping cart, selection should be dynamic.
    const products = await page.locator(".inventory_item").all();
    const randomProductIndex = Math.floor(Math.random() * products.length);
    await products[randomProductIndex].locator("button").click();

    // Navigate to the shopping cart
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Verify that there are 2 products successfully added to the cart.
    const cartItems = await page.locator(".cart_list .cart_item").all();
    expect(cartItems.length).toBe(2);
  });
});
