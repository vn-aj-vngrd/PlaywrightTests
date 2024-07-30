import { test, expect } from "@playwright/test";

const BASE_URL = "https://www.saucedemo.com/";
const CREDENTIALS = [
  { username: "standard_user", password: "secret_sauce" },
  { username: "locked_out_user", password: "secret_sauce" },
  { username: "problem_user", password: "secret_sauce" },
];

test.describe("Login Page", () => {
  test("should login to the application successfully", async ({ page }) => {
    // Open the web application
    await page.goto(BASE_URL);

    // Verify that the login page is displayed.
    expect(await page.title()).toBe("Swag Labs");

    // Enter valid credentials and click the login button.
    await page
      .getByRole("textbox", { name: "Username" })
      .fill(CREDENTIALS[0].username);
    await page
      .getByRole("textbox", { name: "Password " })
      .fill(CREDENTIALS[0].password);
    await page.getByRole("button", { name: "Login" }).click();

    // Verify that the Home/Products page is displayed after successful login.
    const title = await page.locator("data-test=title").textContent();
    expect(title).toBe("Products");
  });

  test("should display an error message when logging in with invalid credentials", async ({
    page,
  }) => {
    // Open the web application
    await page.goto(BASE_URL);

    // Verify that the login page is displayed.
    expect(await page.title()).toBe("Swag Labs");

    // Enter invalid credentials and click the login button.
    await page
      .getByRole("textbox", { name: "Username" })
      .fill(CREDENTIALS[1].username);
    await page
      .getByRole("textbox", { name: "Password " })
      .fill(CREDENTIALS[1].password);
    await page.getByRole("button", { name: "Login" }).click();

    // Verify that the error message is displayed.
    const errorMessage = await page.locator("data-test=error").textContent();
    expect(errorMessage).toBe(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
