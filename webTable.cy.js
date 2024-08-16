describe('Alert', () => {

    beforeEach('Login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php",{
            failOnStatusCode: false,
          })
          cy.wait(1000000)
        cy.get("#input-username").type("demo")
        cy.get("input-password").type("demo")
        cy.get("[type='submit']").click()
        cy.get("#menu-customer").click()
        
    })

    it("number of rows & columns",()=>   {
    
        cy.get("[href='https://demo.opencart.com/admin/index.php?route=customer/customer&user_token=211e02037b3e0f938ce127fc9eaa6cbc']").click()

    })

})