describe('CssLocators', () => {

    it('test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.url().should('include','orangehrmlive.com').and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin")

        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").should('have.value',"Admin")

    })
    it('explicit', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
        let expName="manda user";
        cy.get('.oxd-userdropdown-name').then(  (x)=>{

            //bdd style
            let actName=x.text()
            expect(actName).to.equal(expName)
            


            ///tdd style
            assert.equal(actName,expName)
           // assert.notEqual(actName,expName)
        })
        

    })
})