import productRegistration from '../pages/productRegistrationPage'
import userLogin from '../pages/userLoginPage'

const prouctName = 'Laptop Lenovo X' + Math.random().toString(36).substring(7);
const numeroQuantidade =  Math.random().toString(36).substring(7);
const numeroPreco =  Math.random().toString(36).substring(7);

  // Access login page before which test
  beforeEach(() => {
    cy.visit('/');
});

describe('Registration new product', () => {
    it('Must be possible create a new product on application', () => {
       
        userLogin.acessTheLoginPage({
            email: 'murilomag.galindo@gmail.com',
            senha: 'user@1234'
                       
        })
       
        cy.get('[data-testid="cadastrarProdutos"]', { timeout: 8000 }).click();
        productRegistration.fillProductRegistration({
            nome: prouctName,
            preco: numeroPreco,
            descricao: 'Microsoft Novo laptop Surface (7ª edição) - Windows 11 Home Copilot + PC - Tela LCD PixelSense de 13,8 polegadas - Qualcomm Snapdragon X Elite (12 núcleos) - RAM de 32 GB - SSD de 1 TB - Grafite - ',
            quantidade: numeroQuantidade,
            imagem: 'cypress/fixtures/produto-laptop.png'

        })
        cy.contains('Listar Produtos').should('be.visible');
        cy.location('href').should('eq', 'https://front.serverest.dev/admin/listarprodutos');
        
        

    });

})