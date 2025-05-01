// Cypress General Configuration File/Entry Point
import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 's51sqp',
  chromeWebSecurity: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',  // Sets the pattern for locating tests
    supportFile: false,  // Disable support file (if not needed)
    video: false,  // Disable video recording of tests (optional)
    reporter: 'mochawesome',  // Define the reporter to generate reports with Mochawesome
    reporterOptions: {
      reportDir: 'cypress/reports',  // Directory where reports will be stored
      overwrite: false,  // Do not overwrite old reports
      html: true,  // Generates the report in HTML format
      json: true  // Generate the report in JSON format'
    },
    baseUrl: 'https://front.serverest.dev/login',  // Set the base URL for the tests
    testIsolation: false,  // It will not clear the screen state after each it
    setupNodeEvents(on, config) {
      // Implementing event listeners if needed
    }
  }
});
