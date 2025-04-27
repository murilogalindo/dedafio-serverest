Projeto de Automação Cypress - Serverest

This project performs automated tests on the Serverest platform using Cypress with Page Object Model, integration with Mochawesome for reports, and following good automation practices.
Technologies used

    Cypress — E2E Test Automation Framework

    Mochawesome — Generating test reports in HTML and JSON
    
    JavaScript — Test language

    Node.js — Enviroment to executionEnvironment to execution

    Page Object Model — Organization of tests

Folder structures

cypress/
├── e2e/
│   ├── api/
│   │   └── api.spec.cy.js      # API Tests
│   ├── listProduct.spec.cy.js
│   ├── productRegistration.spec.cy.js
│   ├── userLogin.spec.cy.js
│   ├── userRegistration.spec.cy.js
├── pages/
│   ├── listProductPage.js         # Page Object  list Product
│   ├── productRegistrationPage.js # Page Object  Register Product
│   ├── userLoginPage.js           # Page Object  login 
│   ├── userRegistrationPage.js    # Page Object  Registar user
├── fixtures/
│   └── produto-laptop.png      # Image 
└── reports/                    # Reports generated
Como instalar

    Clone the project:

git clone git@github.com:murilogalindo/dedafio-serverest.git

    Access the folder:

cd dedafio-serverest

    Install the dependencies:

npm install

Settings

The project is already configured in cypress.config.js:s:

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

How to run the tests

    To open Cypress Interactive:

npx cypress open

    To run all tests in headless mode and generate the report:

npx cypress run

Report Generation

After running npx cypress run, reports will be generated in:

cypress/reports/

You can open the .html file to view the graphical report of the tests.
Tested features

    New user registration

    User Login

    New product registration

    Product listing and search

    API Tests Serverest

Future improvements

    Continuous Integration (CI/CD) with GitHub Actions and Jenkins



Author

Developed by Murilo 🚀
LinkedIn: https://www.linkedin.com/in/murilogalindo/  | GitHub: https://github.com/murilogalindo
