Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Francisco',
      lastName: 'Pereira',
      email: 'angelo@exemplo.com',
      text: 'teste'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')
})