/// <reference types="cypress"/>

describe('Autenticação', () => {

    it('Efetuar login com usuário e senha válidos', () => {
        // acessar o site
        cy.visit('/')

        // clicar no botão sign in 
        cy.get('.nav-link') //4 Elementos
            .contains('Sign in')
            .click()
        //  ou
        //  cy.get('[href*login]').click()

        // informar usuario e senha

        const email = Cypress.env('user').email
        const pass = Cypress.env('user').password

        cy.get('input[type=email]').type(email)
        cy.get('input[type=password]').type(pass)

        // clicar no botao entrar
        cy.get('button[type=button]').click()

        // verificar se logou
        cy.get('.nav-pills a.nav-link') //2 elementos
          .should('have.length', 2)//Deve conter o tamanho = 2

        cy.get('.nav-pills a.nav-link') //2 elementos
            // posicao - .eq(), .first, .last
        .first()
        .should('contain.text', 'Your Feed') //Deve conter o texto Your Feed
    });                                      //sould contain text Your Feed

});