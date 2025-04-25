//Arquivo de configuração/entry point geral do Cypress
import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://front.serverest.dev/login',
    //não vai limpar o estado da tela após cada it
    testIsolation: false
  }
});
