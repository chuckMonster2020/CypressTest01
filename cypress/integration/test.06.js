describe('SSO works but is inconsistent', function(){

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
        cy.contains('Sign in').click()
    })

    //   it('Load Sign in page', function(){
    // This just goes to a specific instance so will break, need to work out how to get around SSO issue!!
    //     cy.visit('https://auth.local-dev:9443/idp/profile/SAML2/Redirect/SSO;jsessionid=F46312E26B874013C65D39600BFB12BE?execution=e1s1')
    //})

    it('SSO Stuff', function(){
        cy.request('POST', 'https://auth.local-dev:9443/idp/profile/SAML2/Redirect/SSO?execution=e1s1', { username: 'steve.smith@empire.com', password: 'Passw0rd' })
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

    it('Sign in', function(){
        //cy.contains('a.govuk-button')
        cy.get('input#username.govuk-input')
            .type('steve.smith@empire.com')
        cy.get('input#password.govuk-input')
            .type('Passw0rd')
        cy.get('button#sign-in-cta.govuk-button').click()
    })

    it('Selects the competition', function(){
        cy.contains('Mobile Phone Data for Logistics Analytics').click()
    })


})