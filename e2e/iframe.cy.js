describe('iframe', () => {

    it('test1', ()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')
       cy.get('[aria-label="Close"]').click()
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').type("welcome")


    })


})