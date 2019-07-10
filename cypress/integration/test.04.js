describe('Train time check', function(){

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('Load website and check is ok', function(){
        cy.visit('http://www.nationalrail.co.uk')
        cy.contains('Where are you heading?')
    })

    it('Enter locations', function(){
        cy.get('input#txtFrom.jpPredictText.op-060-tracked')
            .type("Reading")
        cy.get('input#txtTo.jpPredictText')
            .type("Newbury")
    })

    it('Enter date/time', function(){
        //Can I just use .hours etc?
        cy.get('select#sltHours.hours').select('16')
        cy.get('select#sltMins.mins').select('30')
    })

    it('Submit', function(){
        cy.get('button.b-y.lrg.rgt.not-IE6.op-060-tracked').click()
    })

})