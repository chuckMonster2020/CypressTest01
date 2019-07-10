describe('IFS test 01', function(){

    it('Load IFS and check is ok', function(){

        cy.visit('https://ifs.local-dev/competition/search')
        cy.contains('Innovation competitions').click()

    })

    it('Search for a comp', function(){

        cy.get('#keywords.govuk-input')
            .type('Low-cost propulsion mechanisms for subsonic travel')
        cy.contains('Update results').click()
        cy.contains('Low-cost propulsion mechanisms for subsonic travel').click()

    })

    it('Apply for a comp', function(){
        cy.contains('Start new application').click()
        //cy.contains('Sign in').click()
    })

    it('SSO Stuff', function(){
    cy.request('POST', 'https://ifs.local-dev', { username: 'steve.smith@empire.com', password: 'Passw0rd' })
        .then((response) => {
        // pull out the location redirect
        const loc = response.headers['Location']

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

})



