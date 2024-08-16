describe('HT', () => {

    it('screenshots', () => {

        cy.visit("https://demo.opencart.com/")
        //cy.screenshot("home")
        cy.get('#logo > a > .img-fluid').screenshot('logo')
    })


    it.only('screenshots', () => {

        cy.visit("https://demo.opencart.com/")
        //cy.screenshot("home")
        cy.get('.nav-link').click()
        cy.get('#content').should('have.text', 'tab')
    })

})