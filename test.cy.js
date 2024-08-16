describe('template spec', () => {

    it('test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.title().should('eq','OrangeHRM')
      })

      it('test2', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.title().should('eq','OrangeHRMeff')
      })

})