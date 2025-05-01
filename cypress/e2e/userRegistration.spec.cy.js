import userRegistrationPage from '../pages/userRegistrationPage'
const numero =  Math.random().toString(36).substring(7);

describe('Create User Registration on Serverest platform', () => {

     // Access login page before which test
     beforeEach(() => {
        cy.visit('/');
    });

    it('shold not be possible registered an user with invalidi user name', () => {

        //userRegistrationPage.visit();
        userRegistrationPage.clickToRegister();
        userRegistrationPage.fillFormToRegisterEmptyName({
            nome: "",
            email: `murilomag${numero}@gmail.com`,  
            senha: 'user@1234'

            
    });
    // Assert: Check invalid email message is visible
    cy.contains('Nome é obrigatório')  
    .should('be.visible'); 
    });

     it('shoud be possible to create a register whit sucesse', () => {

        //userRegistrationPage.visit();
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
