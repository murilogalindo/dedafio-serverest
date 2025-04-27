import userLogin from '../pages/userLoginPage'

describe ('User logs into the applicationin on aplication', () => {

    it('user must be registered on application', () => {

        userLogin.visit();
        userLogin.acessTheLoginPage({
            email: 'murilomag.galindo@gmail.com',
            senha: 'user@1234'
        })

    });
});
