describe ('My first test', function(){
    it('clicks the kitchen sink', function(){
        expect(true).to.equal(true)

        //cy.pause()

        cy.visit('/')

        cy.contains('type').click()

        cy.url()
            .should('include', '/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')

        cy.get('.action-focus')
            .type('password',{delay:1000})
            .should('have.value', 'password')

    //Adding some text to see if Git picks it up...

    })
})