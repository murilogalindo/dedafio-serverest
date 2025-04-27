// Arquivo de configuração/entry point geral do Cypress
import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 's51sqp',
  chromeWebSecurity: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',  // Define o padrão para localizar os testes
    supportFile: false,  // Desabilita o arquivo de suporte (se não necessário)
    video: false,  // Desabilita a gravação de vídeos dos testes (opcional)
    reporter: 'mochawesome',  // Define o reporter para gerar os relatórios com Mochawesome
    reporterOptions: {
      reportDir: 'cypress/reports',  // Diretório onde os relatórios serão armazenados
      overwrite: false,  // Não sobrescrever relatórios antigos
      html: true,  // Gera o relatório em formato HTML
      json: true  // Gera o relatório em formato JSON
    },
    baseUrl: 'https://front.serverest.dev/login',  // Define a URL base para os testes
    testIsolation: false,  // Não vai limpar o estado da tela após cada it
    setupNodeEvents(on, config) {
      // Implementação de listeners de eventos, se necessário
    }
  }
});
