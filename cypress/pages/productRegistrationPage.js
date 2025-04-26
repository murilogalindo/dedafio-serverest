class productRegistrationPage {

    visit(){
        cy.visit('/')
    }
    fillProductRegistration({nome, preco, descricao, quantidade, imagem}){
        //fill with email and password to do login
        cy.get('input[name="nome"]').should('not.be.disabled').type(nome);
        cy.get('input[name="price"]').should('not.be.disabled').type(preco);
        cy.get('textarea[name="description"]').should('not.be.disabled').type(descricao);
        cy.get('input[name="quantity"]').should('not.be.disabled').type(quantidade);
        if (imagem) {
            // Usa {force: true} caso o input esteja escondido ou não acessível diretamente
            cy.get('input[name="imagem"]').should('not.be.disabled').selectFile(imagem, { force: true });
        }

        cy.get('button[type="submit"]').click()
        
    
    };

};
export default new productRegistrationPage();