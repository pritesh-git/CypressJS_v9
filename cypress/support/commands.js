/// <reference types="cypress" />

Cypress.Commands.add('visitPage', url => {
  cy.visit(url, { timeout: 10000 })
})

Cypress.Commands.add('textInput', element => {
  cy.get(element.id).type(element.value, { timeout: 5500 })
})

Cypress.Commands.add('clickButton', btnId => {
  cy.get(btnId.id).click({ timeout: 5500 })
})

Cypress.Commands.add('haveText', element => {
  cy.get(element.id).should('have.text', element.value)
})

Cypress.Commands.add('containText', element => {
  cy.get(element.id).should('contain', element.value)
})

Cypress.Commands.add('checkExist', element => {
  expect(element.id).to.exist
})

Cypress.Commands.add('selectOption', element => {
  cy.get(element.id).select(element.value)
})
