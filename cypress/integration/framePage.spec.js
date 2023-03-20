describe('Frame Page', () => {
  let frameJson
  before(() => {
    cy.visitPage('/Frames.html')
    cy.fixture('frame.json').then(data => {
      frameJson = data
    })
  })
  it('Check text', () => {
    cy.title().should('include', 'Frame') // Check header text
    cy.checkExist({ id: frameJson.navTitle }) // Check nav title existence
    cy.haveText(frameJson.title) // Check title text
    frameJson.navArray?.forEach(item => {
      cy.checkExist({ id: `.nav > :nth-child(${item}) > a` }) // Check Menu element existence
    })
  })
  it('Check first tab', () => {
    const { singleFrame, typeActive, type2, text1, text2 } = frameJson

    cy.haveText({ id: typeActive, value: text1 })
    cy.haveText({ id: type2, value: text2 })
    cy.clickButton({ id: typeActive })
    cy.checkExist({ id: singleFrame })
  })
  it('Check second tab', () => {
    const { multiFrame, typeActive, type1, type2, text1, text2 } = frameJson

    cy.haveText({ id: typeActive, value: text1 })
    cy.haveText({ id: type2, value: text2 })
    cy.clickButton({ id: type2 })
    cy.haveText({ id: typeActive, value: text2 })
    cy.haveText({ id: type1, value: text1 })
    cy.clickButton({ id: typeActive })
    cy.checkExist({ id: multiFrame })
  })
})
