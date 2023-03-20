describe('Accordion Tab', () => {
  let accordionJson
  before(() => {
    cy.visitPage('/Accordion.html')
    cy.fixture('accordion.json').then(data => {
      accordionJson = data
    })
  })

  it('Check element existence', () => {
    accordionJson.menuArray?.id?.forEach(item => {
      cy.checkExist({ id: `.nav > :nth-child(${item}) > a` }) // Check Menu element existence
    })
    cy.checkExist(accordionJson.title) // Check title existence
    cy.checkExist(accordionJson.title1) // Check Header existence
    cy.checkExist(accordionJson.firstAccordionTitle) // Check accordion 1 title existence
    cy.checkExist(accordionJson.secondAccordionTitle) // Check accordion 2 title existence
    cy.checkExist(accordionJson.thirdAccordionTitle) // Check accordion 3 title existence
    cy.checkExist(accordionJson.fourthAccordionTitle) // Check accordion 4 title existence

    cy.clickButton(accordionJson.firstAccordionTitle).then(() => {
      cy.checkExist(accordionJson.firstAccordionBody) // Check accordion 1 body existence
    })
    cy.clickButton(accordionJson.secondAccordionTitle).then(() => {
      cy.checkExist(accordionJson.secondAccordionBody) // Check accordion 2 body existence
    })
    cy.clickButton(accordionJson.thirdAccordionTitle).then(() => {
      cy.checkExist(accordionJson.thirdAccordionBody) // Check accordion 3 body existence
    })
    cy.clickButton(accordionJson.fourthAccordionTitle).then(() => {
      cy.checkExist(accordionJson.fourthAccordionBody) // Check accordion 4 body existence
    })
  })

  it('Check element text', () => {
    cy.title().should('include', 'Accordion') // Check accordion title text
    cy.haveText(accordionJson.title) // Check accordion title text
    cy.containText(accordionJson.firstAccordionTitle) // Check accordion 1 title text
    cy.containText(accordionJson.secondAccordionTitle) // Check accordion 2 title text
    cy.containText(accordionJson.thirdAccordionTitle) // Check accordion 3 title text
    cy.containText(accordionJson.fourthAccordionTitle) // Check accordion 4 title text
    cy.clickButton(accordionJson.firstAccordionTitle).then(() => {
      cy.containText(accordionJson.firstAccordionBody) // Check accordion 1 body text
    })
    cy.clickButton(accordionJson.secondAccordionTitle).then(() => {
      cy.containText(accordionJson.secondAccordionBody) // Check accordion 2 body text
    })
    cy.clickButton(accordionJson.thirdAccordionTitle).then(() => {
      cy.containText(accordionJson.thirdAccordionBody) // Check accordion 3 body text
    })
    cy.clickButton(accordionJson.fourthAccordionTitle).then(() => {
      cy.containText(accordionJson.fourthAccordionBody) // Check accordion 4 body text
    })
  })
})
