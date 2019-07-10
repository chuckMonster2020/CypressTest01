describe('IFS test 11', function(){

    it('Load IFS and check is ok', function(){
        cy.visit('https://ifs.local-dev/competition/search');
        cy.contains('Innovation Funding Service').click();
        cy.contains('Sign in').click()
    });

    it('SSO Stuff', function(){
        cy.request('POST', 'https://auth.local-dev:9443/idp/profile/SAML2/Redirect/SSO?execution=e1s1', { username: 'steve.smith@empire.com', password: 'Passw0rd' })
            .then((response) => {
            const loc = response.headers['https://auth.local-dev:9443/']
            const token = parseOutMyToken(loc)
            cy.visit('https://auth.local-dev:9443/idp/profile/SAML2/Redirect/SSO;jsessionid=' + token)
            cy.visit(loc)
        })
    });

    it('Sign in', function(){
        cy.get('input#username.govuk-input')
            .type('worth.email.test+mario@gmail.com');
        cy.get('input#password.govuk-input')
            .type('Passw0rd');
        cy.get('button#sign-in-cta.govuk-button').click();
        cy.get('h1.govuk-heading-l').should('contain','Applications');

        //it('Navigate to new application screen', function(){
        cy.contains('Innovation Funding Service').click();
        cy.get('h1.govuk-heading-l').should('contain','Innovation competitions');
        //})

         //it('Start a new application', function(){
        cy.get('input#keywords.govuk-input')
            .type('Reusability of waste material rocketry components');
        cy.contains('Update results').click();
        cy.contains('Reusability of waste material rocketry components').click();
        cy.contains('Start new application').click();
        //})

        //This to be an if statement
        cy.get('body').then(($body) => {
            if ($body.text().includes('You have already')) {
            cy.get('[type="radio"]').first().check();
            cy.contains('Continue').click();
            cy.contains('Save and continue').click()
        } else {
            cy.contains('Save and continue').click()
        }
        })

        cy.get('#section-303 > .task-list > :nth-child(6) > .task > .govuk-heading-s > .govuk-link').click()
        cy.contains('+ Upload').click()
            .pause()
        cy.contains('+ Upload').click()



    })
});