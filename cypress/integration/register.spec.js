describe('Register Page', () => {
  var registerJson
  before(() => {
    cy.visitPage('/')
    cy.fixture('register.json').then(data => {
      registerJson = data
    })
  })
  it('Should Register SuccessFully', () => {
    cy.clickButton(registerJson.openForm) // Click on SIGN UP
    cy.textInput(registerJson.firstName) // Enter first name
    cy.textInput(registerJson.lastName) // Enter last name
    cy.textInput(registerJson.address) // Enter address
    cy.textInput(registerJson.phoneNo) // Enter phone number
    cy.textInput(registerJson.email) // Enter email id
    cy.textInput(registerJson.createPassword) // Enter create password
    cy.textInput(registerJson.confirmPassword) // Enter confirm password
    cy.textInput(registerJson.country1).clickButton(registerJson.country2) // Enter country
    cy.selectOption(registerJson.skillSelect) // Select skills
    cy.selectOption(registerJson.daySelect) // Select birth day
    cy.selectOption(registerJson.monthSelect) // Select birth month
    cy.selectOption(registerJson.yearSelect) // Select birth year
    cy.clickButton(registerJson.languageSelect1)
      .clickButton(registerJson.languageSelect2)
      .clickButton(registerJson.languageSelect3) // Select language
    cy.clickButton(registerJson.genderRadio) // Select gender
    cy.clickButton(registerJson.hobbiesCheckbox) // Select hobbies
    cy.clickButton(registerJson.submitBtn) // Select submit Button
    cy.clickButton(registerJson.ResetBtn) // Select reset button

    //->this div is removed form site => cy.selectOption(registerJson.countries);
  })
})
