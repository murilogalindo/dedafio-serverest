Project: Cypress Automation - Serverest

This project performs automated tests on the Serverest platform using Cypress with the Page Object Model pattern, integration with Mochawesome for reports, and following good automation practices.
🚀 Technologies Used

    Cypress — E2E Testing Framework

    Mochawesome — Test Reports in HTML and JSON

    JavaScript — Test Programming Language

    Node.js — Execution Environment

    Page Object Model — Test Organization Pattern

📂 Folder Structure

cypress/
├── e2e/
│   ├── api/
│   │   └── api.spec.cy.js               # API Tests
│   ├── listProduct.spec.cy.js            # Product listing test
│   ├── productRegistration.spec.cy.js    # Product registration test
│   ├── userLogin.spec.cy.js               # User login test
│   ├── userRegistration.spec.cy.js        # User registration test
├── pages/
│   ├── listProductPage.js                # Page Object - List Products
│   ├── productRegistrationPage.js        # Page Object - Register Product
│   ├── userLoginPage.js                   # Page Object - User Login
│   ├── userRegistrationPage.js            # Page Object - User Registration
├── fixtures/
│   └── produto-laptop.png                # Image for upload
└── reports/                               # Generated Reports

⚙️ Installation

    Clone the repository:

git clone git@github.com:murilogalindo/dedafio-serverest.git

Navigate to the project folder:

cd dedafio-serverest

Install the dependencies:

    npm install

🛠 Settings

The project is already configured inside cypress.config.js:

import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    video: false,
    baseUrl: 'https://front.serverest.dev',
    testIsolation: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    }
  }
});

▶️ How to Run the Tests

    To open Cypress in interactive mode:

npx cypress open

To run all tests in headless mode and generate the report:

    npx cypress run

📊 Report Generation

After running npx cypress run, test reports are generated inside:

cypress/reports/

You can open the .html file inside that folder to view the detailed graphical report of the test executions.
✅ Tested Features

    New user registration

    User login

    New product registration

    Product listing and search

    API testing on Serverest platform

🔮 Future Improvements

    Integrate CI/CD pipelines (GitHub Actions or Jenkins)

    Add more negative test scenarios

    Implement API mocking for faster testing

👨‍💻 Author

Developed by Murilo Galindo 🚀

    LinkedIn

    GitHub
