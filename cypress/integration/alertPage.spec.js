describe('Alert Page', () => {
  let alertJson
  before(() => {
    cy.visitPage('/Alerts.html')
    cy.fixture('alert.json').then(data => {
      alertJson = data
    })
  })
  it('Check text', () => {
    cy.title().should('include', 'Alerts') // Check header text
    cy.checkExist({ id: alertJson.navTitle }) // Check nav title existence
    cy.haveText(alertJson.title) // Check title text
    alertJson.navArray?.forEach(item => {
      cy.checkExist({ id: `.nav > :nth-child(${item}) > a` }) // Check Menu element existence
    })
  })
  it('Check first tab', () => {
    const {
      okBtn,
      alertTypeActive,
      alertType2,
      alertType3,
      alertText1,
      alertText2,
      alertText3,
      alertText4,
    } = alertJson

    cy.haveText({ id: alertTypeActive, value: alertText1 })
    cy.haveText({ id: alertType2, value: alertText2 })
    cy.haveText({ id: alertType3, value: alertText3 })
    cy.clickButton({ id: okBtn })
    cy.on('window:alert', str => {
      expect(str).to.equal(alertText4)
    })
  })
  it('Check second tab', () => {
    const {
      cancelBtn,
      demo,
      alertTypeActive,
      alertType1,
      alertType2,
      alertType3,
      alertText1,
      alertText2,
      alertText3,
      alertText5,
      alertText7,
    } = alertJson

    cy.clickButton({ id: alertType2 })
    cy.haveText({ id: alertType1, value: alertText1 })
    cy.haveText({ id: alertTypeActive, value: alertText2 })
    cy.haveText({ id: alertType3, value: alertText3 })
    cy.clickButton({ id: cancelBtn })
    cy.on('window:confirm', str => {
      expect(str).to.contains(alertText5)
      return false
    })
    cy.haveText({ id: demo, value: alertText7 })
  })
  it('Check third tab', () => {
    const {
      alertTypeActive,
      alertType1,
      alertType2,
      alertType3,
      alertText1,
      alertText2,
      alertText3,
      alertText6,
      textBoxBtn,
      demo1,
    } = alertJson

    cy.clickButton({ id: alertType3 })
    cy.haveText({ id: alertType1, value: alertText1 })
    cy.haveText({ id: alertType2, value: alertText2 })
    cy.haveText({ id: alertTypeActive, value: alertText3 })

    cy.window().then(win => {
      cy.stub(win, 'prompt').returns('tester')
      cy.clickButton({ id: textBoxBtn })
      cy.haveText({ id: demo1, value: alertText6 })
    })
  })
})
