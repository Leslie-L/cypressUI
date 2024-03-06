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
    /*
        Con contains podemos en alto nivel hacer:
        - .contains(content) Búsqueda por contenido
        - .contains(selector, content) Búsqueda por selectores
            
    */
	it('Usando contains', () => {
		cy.contains('Reading')
		cy.contains('.header-wrapper', 'Widgets')
	})

	it('Usando parent', () => {
		// Obten el elemento Padre
		cy.get('input[placeholder="First Name"]').parent()
		//Obetner los elementos Padres en general
		cy.get('input[placeholder="First Name"]').parents()
		// Obten el elemento Padre y el elemento Hijo
		cy.get('input[placeholder="First Name"]').parents().find('label')

		// Obteniendo el elemento padre y el elemento hijo limitando el padre
		cy.get('input[placeholder="First Name"]').parents('form').find('label')

		cy.get('form').find('label')
		//uso incorrrecto de find

		//cy.find('label')
	})
} )