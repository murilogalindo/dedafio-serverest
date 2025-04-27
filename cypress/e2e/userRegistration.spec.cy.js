import userRegistrationPage from '../pages/userRegistrationPage'
const numero =  Math.random().toString(36).substring(7);

describe('Create User Registration on Serverest platform', () => {

    it('shoud be possible to create a register whit sucesse', () => {

        userRegistrationPage.visit();
        userRegistrationPage.clickToRegister();
        userRegistrationPage.fillFormToRegister({
            nome: 'Murilo Teste', numero,
            email: `murilomag${numero}@gmail.com`,  
            senha: 'user@1234'

            
    });
    cy.contains('Cadastro realizado com sucesso') // Procurar o texto na tela
    .should('be.visible'); // Garantir que ele está visível
    });

});
