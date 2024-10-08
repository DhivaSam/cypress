describe('MouseElement', () => {

    // beforeEach('Login', () => {
    //     cy.visit("https://demo.opencart.com")
    //       })
         
        
    
    it('explicit', () => {
        cy.visit("https://demo.opencart.com")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible')
})

it('Rightclick', () => {
      cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
      cy.get('.context-menu-one').trigger('contextmenu')
      cy.get('.context-menu-icon-copy > span').should('be.visible')
})

it('doubleclick', () => {
    cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick')
    cy.get('.context-menu-on[ondblclick="myFunction()"]').trigger('doubleclick')
    cy.get('#demo').should('have.value', "Hello World")
})
it.only('dragdrop', () => {
    cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick')
    cy.get('.context-menu-on[ondblclick="myFunction()"]').trigger('doubleclick')
    cy.get('#demo').should('have.value', "Hello World")
})
})
