import 'cypress-file-upload';
describe('iframe', () => {

    it('test1', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')


        cy.get('#file-upload').attachFile('stp.docx')
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text', 'File Uploaded!')

    })
    it('rename the file', ()=> {

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'stp.docx',fileName:'test.docs'})
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text', 'File Uploaded!')

    })

    it('drag & drop', ()=> {

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('stp.docx', {subjectType:'drag-n-drop'})
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('stp.docx')

    })
    it('multiple files', ()=> {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['stp.docx', 'test2.docx']);
        //cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('stp.docx')

    })
 it.only('shadow dom', ()=> {

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('stp.docx')
        cy.get('.smart-item-name', {includeShadowDom:true}).contains('stp.docx')
    })

})