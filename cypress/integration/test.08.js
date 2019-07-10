describe('conditional tests 01', function() {

    Cypress._.times(4, (i) => {
it('num ${i + 1} random', function(){
    cy.visit('https://www.ultimateqa.com/complicated-page/')

    cy.get('#et_pb_contact_name_0').type('test')

    cy.contains('Automation Exercises').click()

    cy.contains('Learn how to automate an application that evolves over time').click()

    cy.xpath('//*[@id="post-927"]/div/form/input[1]').type('Test01')

    cy.get('#submitForm').click()

            cy.contains('Learn Critical Automation and Dev Skills')

})
})
})