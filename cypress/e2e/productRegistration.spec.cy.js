import productRegistration from '../pages/productRegistrationPage'
import userLogin from '../pages/userLoginPage'


describe('Registration new product', () => {
    it('Must be possible create a new product no aplication', () => {

        productRegistration.visit();
        userLogin.acessTheLoginPage({
            email: 'murilomag.galindo@gmail.com',
            senha: '123456'
            
        })
        cy.get('[data-testid="cadastrarProdutos"]').click();

        productRegistration.fillProductRegistration({
            nome: 'Laptop Surface',
            preco: '25',
            descricao: 'Microsoft Novo laptop Surface (7ª edição) - Windows 11 Home Copilot + PC - Tela LCD PixelSense de 13,8 polegadas - Qualcomm Snapdragon X Elite (12 núcleos) - RAM de 32 GB - SSD de 1 TB - Grafite - ',
            quantidade: '2500',
            imagem: 'cypress/fixtures/produto-laptop.png'

        })
        cy.location('href').should('eq', 'https://front.serverest.dev/admin/listarprodutos');




    })

})