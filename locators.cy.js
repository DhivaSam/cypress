
describe('CssLocators', () => {

    it('test1', () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("#searchbox").type('T-Shirt')
        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains("T-Shirt")

        



    })

})

