import { test, expect } from "@playwright/test";

test.describe("Automation Tests", () => {
  test.beforeEach(async ({ page }) => {});

  // Test Case 1: Login Page
  test("Login Page", async ({ page }) => {
    // Open the web application
    await page.goto("https://www.saucedemo.com/");

    // Verify that the login page is displayed.
    expect(await page.title()).toBe("Swag Labs");

    // Enter valid credentials and click the login button.
    await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
    await page.getByRole("textbox", { name: "Password " }).fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    // Verify that the Home/Products page is displayed after successful login.
    const title = await page.locator("data-test=title").textContent();
    expect(title).toBe("Products");
  });

  // Test Case 2: Adding Products

  test("Adding Products", async ({ page }) => {
    // Open the web application
    await page.goto("https://www.saucedemo.com/");

    // Enter valid credentials and click the login button.
    await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
    await page.getByRole("textbox", { name: "Password " }).fill("secret_sauce");
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

  // Test Case 3: Checkout Page
  test("Checkout Page", async ({ page }) => {});
});
