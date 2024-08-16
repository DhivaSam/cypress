describe('CssLocators', () => {

    it('test1', () => {

        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("a[title='Women']").click()
        cy.xpath("//ul[@class='product_list grid row']/li").should('have.length' ,7)

    })

})