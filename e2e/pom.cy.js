import Login from "../PageObjectsModel/LoginPage"
describe('pom', () => {

    it('test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        const ln = new Login();
        ln.setUserName("Admin");
        ln.setPassword("admin123");
        cy.wait(5000)
        ln.clickSubmit();
        cy.wait(5000)
        ln.verifyLogin();

        })
        it.only('test1', () => {
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          cy.fixture('orangehrm.json').then( (data)=>{
          // let userdata = data;
            const ln = new Login();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();
        })
          })

    })