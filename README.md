# Hands-On Exercise: Automated Testing with Playwright

## Overview

This exercise focuses on automating the testing of a simple web application using Playwright. Participants will write a Playwright script to test various functionalities of the web application.

**Objective:** Automate the testing of a basic web application using Playwright.

**Web Application:** [Sauce Demo](https://www.saucedemo.com/)

## Functionalities to Test

1. **Login Page**:
   - Fields: Username, Password
2. **Product Page**:
   - List of products available
3. **Shopping Cart Page**:
   - View added items
4. **Shipping Information Form Page**:
   - Fields: First Name, Last Name, Zip Code
5. **Checkout Page**

## Tasks

### Test Case 1: Login Page
1. Open the web application.
2. Verify that the login page is displayed.
3. Enter valid credentials and click the login button.
4. Verify that the Home/Products page is displayed after a successful login.

### Test Case 2: Adding Products
1. After logging in, on the Products page:
   - Add one specific product (Sauce Labs Fleece Jacket) to the shopping cart.
   - Add any one random product to the shopping cart (dynamic selection).
2. Navigate to the shopping cart.
3. Verify that there are 2 products successfully added to the cart.

### Test Case 3: Checkout Page
1. On the Shopping Cart page, proceed to the checkout page.
2. On the Shipping Information Form page:
   - Fill out the form with First Name, Last Name, and Zip Code.
3. Verify that the changes are reflected on the shipping information form page.
4. Complete the purchase process and verify that the order is successful.

## Requirements

- Use Playwright with your preferred programming language (JavaScript, TypeScript, Python, etc.).
- Ensure your script includes proper setup and teardown steps.
- Use assertions to validate expected behavior at each step.
- Run your tests and ensure they pass.

## Evaluation Criteria

- **Correctness:** Accuracy of the Playwright script in meeting the requirements.
- **Handling Elements:** Proper handling of elements, waits, and navigation.
- **Code Structure:** Clear and organized code.
- **Assertions:** Effective use of assertions for validation.
- **Environment Management:** Proper setup and teardown to maintain the test environment.

## Bonus

- Implement parameterization for test data (e.g., different sets of login credentials).
- Implement screenshots or video capture during test execution.

## Note

This workshop encourages a hands-on approach, allowing participants to apply concepts directly. Real-world scenarios and challenges will be addressed. Participants are encouraged to bring their projects for personalized assistance. The schedule is flexible and can be adapted based on participants' needs and experiences.
