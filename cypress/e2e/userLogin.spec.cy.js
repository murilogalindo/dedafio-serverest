import userLogin from '../pages/userLogin'

describe ('User do login on aplication', () => {

    it('user must be registered on aplication', () => {

        userLogin.visit();
        userLogin.acessTheLoginPage({
            email: 'murilomag.galindo@gmail.com',
            senha: '123456'
        })

    });
});
