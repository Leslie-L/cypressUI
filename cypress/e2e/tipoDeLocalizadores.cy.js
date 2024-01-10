describe ('Tipos de localizadores', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(()=>{
        cy.visit('/automation-practice-form')
    })
    it('Obtener por medio de un tag', ()=>{
        
        cy.get('input')
    })

    it('Obtener por medio de un atributo', ()=>{
        cy.get('[placeholder="First Name"]')
    })

    it('Obtener por medio de un id', ()=>{
        cy.get('#firstName')
    })

    it('Obtener por medio de una clase', ()=>{
        cy.get('.mr-sm-2.form-control')
    })

} )