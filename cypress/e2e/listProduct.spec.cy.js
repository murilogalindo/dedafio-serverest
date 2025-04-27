import listProductPage from "../pages/listProductPage"
import userLogin from '../pages/userLoginPage'

describe('List product on the application', () => {

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/admin/listarprodutos');
      });
    it('must be list a product by id', () => {

        listProductPage.getProductByName('Laptop Lenovo X4pejzi')
            .should('be.visible');

     
    })
})