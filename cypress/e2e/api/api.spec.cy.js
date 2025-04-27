// Testes de API
 const userId = '9ybxoPayT4TIxmet';
 // Gerar nome aleatório
 const nomeAleatorio = 'Desafioapi' + Math.random().toString(36).substring(7);
  // Gerar email aleatório
  const emailAleatorio = nomeAleatorio + '@example.com';  // Ex: User_xh7t92v@example.com

describe('List all usrers', () => {
    it('Must be return status 200 and list all users', () => {
        cy.request('GET', 'https://serverest.dev/usuarios?administrador=true')
        .should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('usuarios').and.to.be.an('array');
            expect(response.body.usuarios).to.have.length.greaterThan(0);
            console.log(response.body);
        })
    })
})
describe('List user buy id', () => {
    it('Must be return status 200 and a user refer to id', () => {
       
        cy.request('GET', `https://serverest.dev/usuarios/${userId}`)
        
        .should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('nome');  // Verifica se o corpo da resposta tem a propriedade 'nome'
            expect(response.body).to.have.property('email');  // Verifica se o corpo da resposta tem a propriedade 'email'
            expect(response.body).to.have.property('_id').and.to.eq(userId);  // Verifica se o ID do usuário é o mesmo fornecido
        })
    })
})
describe('API - Crete User', () => {
    it('Must be created a user and status should be 201', () => {
        const newUser = {
            nome: nomeAleatorio,
            email: emailAleatorio,
            password: "teste",
            administrador: "true"
        };

        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',  // Verify the correctly andpoint on swagger
            body: newUser,  // User to be created
            headers: {
                'Content-Type': 'application/json'  // Define content
            }
        }).should((response) => {
            expect(response.status).to.eq(201);  // Status HTTP esperado (Criado)
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
            expect(response.body).to.have.property('_id');
        });
    });
});
