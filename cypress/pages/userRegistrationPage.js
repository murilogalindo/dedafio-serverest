class userRegistrationPage{

    visit() {
        cy.visit('/');
    }

    clickToRegister(){
        cy.contains('a', 'Cadastre-se').click()

    }
    //crate variable to register
    fillFormToRegister({ nome, email, senha }){
        //fill all mandatory fild on form
        cy.get('input[name="nome"]').should('not.be.disabled').type(nome);
        cy.get('input[name="email"]').should('not.be.disabled').type(email);
        cy.get('input[name="password"]').should('not.be.disabled').type(senha);
        cy.get('div.highlight').should('not.exist');
        cy.get('input[name="administrador"]').click();
        cy.get('button[type="submit"]').click()
    }
    
}
export default new userRegistrationPage();