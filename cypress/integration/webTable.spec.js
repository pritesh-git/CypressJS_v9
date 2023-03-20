describe('Web Table Page', () => {
  let webTableJson
  before(() => {
    cy.visitPage('/WebTable.html')
    cy.fixture('webTable.json').then(data => {
      webTableJson = data
    })
  })
  it('Should have Text', () => {
    cy.title().should('include', 'Web Table') // Check title text
    cy.checkExist(webTableJson.navTitle) // Check nav title existence
    cy.containText(webTableJson.title) // Check title text
    cy.containText(webTableJson.point1) // Check point 1 text
    cy.containText(webTableJson.point2) // Check point 2 text
    webTableJson.navArray?.forEach(item => {
      cy.checkExist({ id: `.nav > :nth-child(${item}) > a` }) // Check nav existence
    })
  })
  it('Should Sort table', () => {
    webTableJson.menuArray.forEach((el, i) => {
      const cellId = `.ui-grid-coluiGrid-000${
        i + 5
      } > .sortable > .ui-grid-cell-contents`
      const spanId = cellId + ' > span'
      cy.get(spanId)
        .invoke('attr', 'id')
        .then(val => {
          const valId = val?.split('-')[0]
          const newValId =
            valId?.[0].replace('1', '#\\31 ') +
            valId?.slice(1) +
            `-uiGrid-000${i + 5}-menu-button`
          const iconId = newValId + ' > .ui-grid-icon-angle-down'
          const menu1 = '#menuitem-0 > .ui-grid-menu-item'
          const menu2 = '#menuitem-1 > .ui-grid-menu-item'

          cy.clickButton({ id: iconId }) // Open dropdown menu
          cy.clickButton({ id: menu1 }) // Click on sort in ascending order
          cy.clickButton({ id: iconId }) // Open dropdown menu
          cy.clickButton({ id: menu2 }) // Click on sort in descending order
        })
      cy.containText({ id: cellId, value: `${el}` }) // Check table title text
    })
  })
})
