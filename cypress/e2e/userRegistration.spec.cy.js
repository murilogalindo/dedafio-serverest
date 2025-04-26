import userRegistrationPage from '../pages/userRegistrationPage'

describe('Create User Registration on Serverest platform', () => {

    it('shoud be possible to create a register whit sucesse', () => {

        userRegistrationPage.visit();
        userRegistrationPage.clickToRegister();
        userRegistrationPage.fillFormToRegister({
            nome: 'Murilo Teste',
            email: 'murilomag.galindo@gmail.com',
            senha: '123456'
    });
    });

});
