/// <reference types="cypress"/>

// articles.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */

describe('Autenticação', () => {

    it('Criar um novo artigo', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.login()

        cy.get('a[href$=editor]').click();
        cy.get('input[placeholder="Article title"').type('Article Title');
        cy.get('input[placeholder="What is this article about?"]').type('About nothing');
        cy.get('form textarea').type('Teste');
        cy.get('input[placeholder="Enter tags"]').type('Article Title');
        cy.get('button.btn-primary').click();

        cy.get('h1')
            .should('contain.text', 'Article Title')

        /* ==== End Cypress Studio ==== */
    });

});

