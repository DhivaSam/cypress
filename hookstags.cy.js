describe('HT', () => {

beforeEach('login', () =>{
    cy.log("**** launch app ****")
})

afterEach('teardown', () =>{
    cy.log("**** tear downed***")
})
    it('test1', () => {
        cy.log("**** log1 ****")

    })

    it('test2', () => {
        cy.log("**** log2 ****")

    })
    it('test3', () => {
        cy.log("**** log3 ****")

    })
    it('test4', () => {

        cy.log("**** log4 ****")
    })

})