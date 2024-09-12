Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Tiago')
    cy.get('#lastName').type('Nunes')
    cy.get('#email').type('tiagoo2001@yahoo.com.br')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})
