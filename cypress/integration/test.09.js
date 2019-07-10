describe('IFS login test', function(){

    it('Load IFS and check is ok', function() {
        cy.visit('https://auth.local-dev:9443/idp/profile/SAML2/Redirect/SSO?execution=e1s1')
        cy.login()
    })
})

===

'POST', 'https://auth.local-dev:9443/idp/profile/SAML2/Redirect/SSO?execution=e1s1', { username: 'steve.smith@empire.com', password: 'Passw0rd' })
.then((response) => {
    // pull out the location redirect
    const loc = response.headers['https://auth.local-dev:9443/']

    // parse out the token from the url (assuming its in there)
    const token = parseOutMyToken(loc)

    // do something with the token that your web application expects
    // likely the same behavior as what your SSO does under the hood
    // assuming it handles query string tokens like this
    cy.visit('https://auth.local-dev:9443/idp/profile/SAML2/Redirect/SSO;jsessionid=' + token)

    // if you don't need to work with the token you can sometimes
    // just visit the location header directly
    cy.visit(loc)
})
})



it('Navigate to new application screen', function(){
    cy.contains('Innovation Funding Service').click()
    cy.get('h1.govuk-heading-l').should('contain','Innovation competitions')
})

it('Start a new application', function(){
    cy.contains('Reusability of waste material rocketry components').click()
    cy.contains('Start new application').click()
        .pause()
    cy.contains('Save and continue').click()
})

it('Fill in Application team', function(){
    cy.contains('Application team').click()
    cy.get('h1.govuk-heading-xl').should('contain','Application team')
})

===

it('Existing comp', function(){
    cy.contains('Untitled application (start here)').click()
})