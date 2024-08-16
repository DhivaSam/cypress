describe('Alert', () => {

    it.skip('test1', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')

        })
        cy.get("#result").should('have.text',"You successfully clicked an alert")
    })


    it.only('test2', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')

        })
        cy.get("#result").should('have.text',"You clicked: Ok")
    })


    it.skip('test3', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsPrompt()']").click()

        cy.on('window:prompt',(t)=>{
            expect(t).to.contains('I am a JS prompt')

        })
        cy.get("#result").should('have.text',"You entered:")
    })
})