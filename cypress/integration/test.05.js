const variables01 = require('../fixtures/variables01.js')

describe('Train time check', function(){
    beforeEach(function(){
        //it('Load website and check is ok', function(){
        cy.visit('http://www.nationalrail.co.uk')
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it.only('Enter locations', function(){
        cy.contains('Where are you heading?')
        cy.get(variables01.StationFrom).type("Reading")
        cy.get(variables01.StationTo).type("Newbury")
        cy.get(variables01.hours).select('16')
        cy.get('select#sltMins.mins').select('30')
        cy.get('button.b-y.lrg.rgt.not-IE6.op-060-tracked').click()
    })

})