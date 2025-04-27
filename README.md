Cypress Automation Project - Serverest

This project performs automated tests on the Serverest platform using Cypress with the Page Object Model, integrated with Mochawesome for report generation, following best automation practices.
🚀 Technologies Used

    Cypress — E2E Test Automation Framework

    Mochawesome — Generating test reports in HTML and JSON

    JavaScript — Test scripting language

    Node.js — Execution environment

    Page Object Model — Test organization pattern

📂 Folder Structure

cypress/
├── e2e/
│   ├── api/
│   │   └── api.spec.cy.js          # API Tests
│   ├── listProduct.spec.cy.js      # Product listing test
│   ├── productRegistration.spec.cy.js # Product registration test
│   ├── userLogin.spec.cy.js        # User login test
│   ├── userRegistration.spec.cy.js # User registration test
├── pages/
│   ├── listProductPage.js          # Page Object - List Products
│   ├── productRegistrationPage.js  # Page Object - Register Product
│   ├── userLoginPage.js             # Page Object - User Login
│   ├── userRegistrationPage.js      # Page Object - User Registration
├── fixtures/
│   └── produto-laptop.png          # Image for upload
└── reports/                        # Generated reports

📥 How to Install

    Clone the repository:

git clone git@github.com:murilogalindo/dedafio-serverest.git

    Navigate into the project directory:

cd dedafio-serverest

    Install the dependencies:

npm install

⚙️ Configuration

The project is already configured in the cypress.config.js file:

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

🧪 How to Run the Tests

    To open Cypress in interactive mode:

npx cypress open

    To run all tests in headless mode and generate the report:

npx cypress run

📈 Report Generation

After running npx cypress run, reports will be generated in:

cypress/reports/

You can open the generated .html file to view the graphical test report.
✅ Features Tested

    New user registration

    User login

    New product registration

    Product listing and search

    Serverest API tests

Future Improvements

    Continuous Integration (CI/CD) with GitHub Actions and Jenkins

    Increase test coverage

    Implement performance tests

👨‍💻 Author

Developed by Murilo 🚀

    LinkedIn

    GitHub

