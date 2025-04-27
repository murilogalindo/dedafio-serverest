import userLogin from '../pages/userLoginPage'

describe ('User logs into the applicationin on aplication', () => {

   
    // Access login page before which test
    beforeEach(() => {
        cy.visit('/');
    });

    it('user try to access with invalid email', () => {
      
        // Assert: Access login page with an invalid email 
        userLogin.acessTheLoginPage({
            email: 'murilomag@gmail',  
            senha: 'user@1234'
        });
    
        // Assert: Check invalid email message is visible
        cy.contains('Email deve ser um email válido')  
            .should('be.visible'); 
    });
    it('user try to access with invalid password', () => {
      
        // Assert: Check invalid password
        userLogin.acessTheLoginPage({
            email: 'murilomag.galindo@gmail.com', 
            senha: '1515@1234'
        });
    
        // Assert: Check invalid password messa erros is visible
        cy.contains('Email e/ou senha inválidos')  
            .should('be.visible');  
    });
    it('user must be registered on application', () => {

   
    userLogin.acessTheLoginPage({
        email: 'murilomag.galindo@gmail.com',
        senha: 'user@1234'
    })
    cy.contains('Bem Vindo Murilo Teste', { timeout: 10000 }) 
    .should('be.visible');

});
});
