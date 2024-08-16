describe('CssLocators', () => {

    it.skip('test1', () => {

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select("Denmark").should('have.value', "Denmark")


    })
    it.skip('test2', () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Japan").type('{enter}')


    })
    it.skip('test3', () => {

        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type('Anna Uni')
        cy.get(".suggestion-title").contains("Anna University").click()
        cy.get('.mw-page-title-main').should('have.text',"Anna University")
        


    })

    it('test4', () => {

        cy.visit("https://www.google.com")
        cy.get('#APjFqb').type('cypress automation')
        cy.get("div.wM6W7d>span").should('have.length', 13)
        cy.get("div.wM6W7d>span").each(($el , index , $list) =>{
            if($el.text()=='cypress automation'){
                cy.wrap($el).click()
            }
           else{
                console.log("error")
           }

        })
        

        
        


    })
})