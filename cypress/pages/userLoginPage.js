class userLoginPage {

    visit(){
        cy.visit('/')
    }
    acessTheLoginPage({email, senha}){
    //fill with email and password to do login
    cy.get('input[name="email"]').should('not.be.disabled').type(email);
    cy.get('input[name="password"]').should('not.be.disabled').type(senha);
    cy.get('button[type="submit"]').click()
    }

}

export default new userLoginPage();