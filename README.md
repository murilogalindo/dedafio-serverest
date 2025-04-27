Project: Cypress Automation - Serverest

This project performs automated tests on the Serverest platform using Cypress with the Page Object Model, integration with Mochawesome for reporting, and following best automation practices.
🚀 Technologies Used

    Cypress — E2E Testing Framework

    Mochawesome — Report generation (HTML and JSON)

    JavaScript — Language for scripting tests

    Node.js — Execution environment

    Page Object Model (POM) — Test organization pattern

📂 Folder Structure

cypress/
├── e2e/
│   ├── api/
│   │   └── api.spec.cy.js             # API tests
│   ├── listProduct.spec.cy.js          # Product listing tests
│   ├── productRegistration.spec.cy.js  # Product registration tests
│   ├── userLogin.spec.cy.js             # User login tests
│   └── userRegistration.spec.cy.js      # User registration tests
├── pages/
│   ├── listProductPage.js              # Page Object for product listing
│   ├── productRegistrationPage.js      # Page Object for product registration
│   ├── userLoginPage.js                 # Page Object for user login
│   └── userRegistrationPage.js          # Page Object for user registration
├── fixtures/
│   └── produto-laptop.png              # Product image for upload
└── reports/                            # Generated test reports

⚙️ Installation

    Clone the repository:

git clone git@github.com:murilogalindo/dedafio-serverest.git

Navigate into the project directory:

cd dedafio-serverest

Install the dependencies:

    npm install

🛠 Configuration

The project is already configured in the file cypress.config.js:

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

▶️ Running the Tests

    To open Cypress in interactive mode:

npx cypress open

To run all tests in headless mode and generate a report:

    npx cypress run

📊 Report Generation

After running the command:

npx cypress run

Test reports will be generated inside:

cypress/reports/

You can open the generated .html file to view the detailed graphical test results.
✅ Features Tested

    User registration

    User login

    Product registration

    Product listing and search

    Serverest API tests

🔮 Future Improvements

    Continuous Integration (CI/CD) with GitHub Actions or Jenkins

    API Mocking

    Expand negative test scenarios

    Performance testing

👨‍💻 Author

Developed by Murilo Galindo 🚀

    LinkedIn: https://www.linkedin.com/in/murilogalindo/

    GitHub: https://github.com/murilogalindo
