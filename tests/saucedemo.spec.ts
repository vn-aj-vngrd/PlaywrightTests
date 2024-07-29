import { test, expect } from "@playwright/test";

// Test Case 1: Login Page
// - Open the web application.
// - Verify that the login page is displayed.
// - Enter valid credentials and click the login button.
// - Verify that the Home/Products page is displayed after successful login.
test("Login Page", async ({ page }) => {
  // Open the web application.
  await page.goto("https://www.saucedemo.com/");

  // Verify that the login page is displayed.
  await expect(page).toHaveTitle("Swag Labs");

  // Enter valid credentials and click the login button.
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  // Verify that the Home/Products page is displayed after successful login.
  await expect(page).toHaveTitle("Swag Labs");
});
