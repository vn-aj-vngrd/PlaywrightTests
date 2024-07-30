import { test, expect } from "@playwright/test";

const BASE_URL = "https://www.saucedemo.com/";
const USERNAME = "standard_user";
const PASSWORD = "secret_sauce";

test.describe("Automated Tests for saucedemo.com", () => {
  // Test Case 1: Login Page
  test("Login Page", async ({ page }) => {
    // Open the web application
    await page.goto(BASE_URL);

    // Verify that the login page is displayed.
    expect(await page.title()).toBe("Swag Labs");

    // Enter valid credentials and click the login button.
    await page.getByRole("textbox", { name: "Username" }).fill(USERNAME);
    await page.getByRole("textbox", { name: "Password " }).fill(PASSWORD);
    await page.getByRole("button", { name: "Login" }).click();

    // Verify that the Home/Products page is displayed after successful login.
    const title = await page.locator("data-test=title").textContent();
    expect(title).toBe("Products");
  });

  // Test Case 2: Adding Products
  test("Adding Products", async ({ page }) => {
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

  // Test Case 3: Checkout Page
  test("Checkout Page", async ({ page }) => {
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

    // In the Shopping cart page, proceed to the checkout page.
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    // Fill out the shipping information form
    const shippingInfo = {
      firstName: "Juan",
      lastName: "Dela Cruz",
      postalCode: "5000",
    };

    await page
      .getByRole("textbox", { name: "First Name" })
      .fill(shippingInfo.firstName);
    await page
      .getByRole("textbox", { name: "Last Name" })
      .fill(shippingInfo.lastName);
    await page
      .getByRole("textbox", { name: "Zip/Postal Code" })
      .fill(shippingInfo.postalCode);

    await page.getByRole("button", { name: "Continue" }).click();

    // Verify that the changes are reflected on the shipping information form page.
    const cartItem = await page.locator(".cart_item").textContent();
    expect(cartItem).toContain("Sauce Labs Fleece Jacket");

    // Complete the purchase process and verify that the order is successful.
    await page.getByRole("button", { name: "Finish" }).click();
    const header = await page.locator("h2").textContent();
    expect(header).toBe("Thank you for your order!");
  });
});
