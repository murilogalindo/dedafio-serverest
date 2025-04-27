class listProductPage {

    visit(){
        cy.visit('/')
    }
   
    getProductByName(productName) {
        return cy.get('table tbody tr')
        .contains('td', productName, { timeout: 10000 })  
        .then((product) => {
            if (product.length > 0) {
                cy.log(`Produto "${productName}" encontrado com sucesso!`);
                cy.wrap(product).should('be.visible');
            } else {
                cy.log(`Produto "${productName}" não encontrado.`);
            }
        });
    }

}
export default new listProductPage();