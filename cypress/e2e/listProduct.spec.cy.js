import listProductPage from "../pages/listProductPage"

describe('List product on the application', () => {

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/admin/listarprodutos');
      });
    it('must be list a product by id', () => {

        listProductPage.getProductByName('Pumpkin Ice Cream')
            .should('be.visible');

     
    })
})