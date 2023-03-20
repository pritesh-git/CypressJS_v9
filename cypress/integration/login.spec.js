describe('Login Page', () => {
  let loginJson
  before(() => {
    cy.visitPage('/')
    cy.fixture('login.json').then(data => {
      loginJson = data
    })
  })
  it('Should Login', () => {
    cy.clickButton(loginJson.openForm) // Click on Sign IN
    cy.textInput(loginJson.email) // Enter email id
    cy.textInput(loginJson.password) // Enter password
    cy.clickButton(loginJson.loginBtn) // Click Submit Button
  })
  it('Should get Error msg', () => {
    cy.textInput(loginJson.email) // Enter email id
    cy.textInput(loginJson.password) // Enter password
    cy.clickButton(loginJson.loginBtn) // Click Submit Button
    cy.haveText(loginJson.errorMsg) // Check error message
  })
})
