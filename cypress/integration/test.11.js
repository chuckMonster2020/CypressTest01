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
        //})

        // it('Navigate to new application screen', function(){
        cy.contains('Innovation Funding Service').click();
        cy.get('h1.govuk-heading-l').should('contain','Innovation competitions');
        //})
        cy.pause()
        // it('Start a new application', function(){
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
    //})

        //it('Application team', function() {
        cy.contains('Application team').click();
        cy.get('h1.govuk-heading-xl').should('contain', 'Application team');
        cy.contains('Mark').click();
        cy.contains('Return to application overview').click();
   // })

   // it('Application details', function() {
        cy.contains('Application details').click();
        cy.get('h1.govuk-heading-xl').should('contain', 'Application details');
        cy.xpath('//*[@id="application.name"]')
            .type('Test application');

        cy.xpath('//*[@id="application.startDate"]').type('02');
        cy.xpath('//*[@id="application_details-startdate_month"]').type('01');
        cy.xpath('//*[@id="application_details-startdate_year"]').type('2020');
        cy.xpath('//*[@id="application.durationInMonths"]').type('10');

        cy.get('[type="radio"]').check('false');
        cy.contains('Mark').click();
        cy.contains('Return to application overview').click();
    //})

      //  it('Research category', function() {
            cy.contains('Research category').click();
            cy.contains('Mark').click();
            cy.contains('This field cannot be left blank.');
            cy.get('[type="checkbox"]').check();
            cy.contains('Mark').click();
        //})

        //it('Project summary', function() {
            cy.contains('Project summary').click();
            cy.contains('Mark').click();
            cy.contains('Please enter some text.');
        cy.get('div.editor.govuk-body')
                .type('Example text');
            cy.contains('Mark').click();
            cy.contains('Return to application overview').click();
        //})

        //it('Public description', function() {
            cy.contains('Public description').click();
            cy.contains('Mark').click();
            cy.contains('Please enter some text.');
            cy.get('div.editor.govuk-body')
                .type('Example text');
            cy.contains('Mark').click();
            cy.contains('Return to application overview').click();
        //})

        //it('Scope', function() {
            cy.contains('Scope').click();
            cy.contains('Mark').click();
            cy.contains('Please enter some text.');
            cy.get('div.editor.govuk-body')
                .type('Example text');
            cy.contains('Mark').click();
            cy.contains('Return to application overview').click();
        //})

        //it('Business oppurtunity', function() {
            cy.contains('Business opportunity').click();
            cy.contains('Mark').click();
            cy.contains('Please enter some text.');
            cy.get('div.editor.govuk-body')
                .type('Example text');
            cy.contains('Mark').click();
            cy.contains('Return to application overview').click();
        //})

        //it('Potential market', function() {
            cy.contains('Potential market').click();
            cy.contains('Mark').click();
            cy.contains('Please enter some text.');
            cy.get('div.editor.govuk-body')
                .type('Example text');
            cy.contains('Mark').click();
            cy.contains('Return to application overview').click();
        //})

        //it('Project exploitation', function() {
            cy.contains('Project exploitation').click();
            cy.contains('Mark').click();
            cy.contains('Please enter some text.');
            cy.get('div.editor.govuk-body')
                .type('Example text');
            cy.contains('Mark').click();
            cy.contains('Return to application overview').click();
        //})

        //it('Economic benefit', function() {
            cy.contains('Economic benefit').click();
            cy.contains('Mark').click();
            cy.contains('Please enter some text.');
            cy.get('div.editor.govuk-body')
                .type('Example text');
            cy.contains('Mark').click();
            cy.contains('Return to application overview').click();
        //})

        //it('Technical approach', function() {
            cy.contains('Technical approach').click();
            cy.contains('Mark').click();
            cy.contains('Please enter some text.');
            cy.get('div.editor.govuk-body')
                .type('Example text');
            cy.contains('Mark').click();
            cy.contains('Return to application overview').click();
            //Upload file?
        //})

        //it('Innovation', function() {
            cy.contains('. Innovation').click();
            cy.contains('Mark').click();
            cy.contains('Please enter some text.');
            cy.get('div.editor.govuk-body')
                .type('Example text');
            cy.contains('Mark').click();
            cy.contains('Return to application overview').click();
            //Upload file?
        //})

        //it('Risks', function() {
            cy.contains('Risks').click();
            cy.contains('Mark').click();
            cy.contains('Please enter some text.');
            //cy.xpath('//*[@id="form-input-2187"]/div/div[3]/div[1]')
            cy.get('div.editor.govuk-body')
                .type('Example text');
            cy.contains('Mark').click();
            cy.contains('Return to application overview').click();
        //})

        //it('Project team', function() {
            cy.contains('Project team').click();
            cy.contains('Mark').click();
            cy.contains('Please enter some text.');
            //cy.xpath('//*[@id="form-input-2191"]/div/div[3]/div[1]')
            cy.get('div.editor.govuk-body')
                .type('Example text');
            cy.contains('Mark').click();
            cy.contains('Return to application overview').click();
            //Upload file?
        //})

        //it('Funding', function() {
            cy.contains('. Funding').click();
            cy.contains('Mark').click();
            cy.contains('Please enter some text.');
            cy.get('div.editor.govuk-body')
                .type('Example text');
            cy.contains('Mark').click();
            cy.contains('Return to application overview').click();
        //})

        //it('Adding value', function() {
            cy.contains('Adding value').click();
            cy.contains('Mark').click();
            cy.contains('Please enter some text.');
            cy.get('div.editor.govuk-body')
                .type('Example text');
            cy.contains('Mark').click();
            cy.contains('Return to application overview').click();
        //})

        //it('Finances section', function() {
            cy.contains('Your finances').click();

            //Your project costs
            cy.contains('Your project costs').click();
            //   })

            // it('Labour', function() {
            cy.contains('Labour').click();
            cy.get('input[id$="role"]:text[value = ""]:first')
                .type('Tester');
            cy.get('input[id$="gross"][value = ""]:first')
                .type('1000');
            cy.get('input[id$="days"][value = ""]:first')
                .type('500');
            cy.contains('Overhead costs').click();
            cy.get('[type="radio"]').check('DEFAULT_PERCENTAGE');
            cy.contains('Labour').click();
//    })

            // it('Materials', function() {
            //Materials - Doesnt work
//        cy.contains('Materials').click()
            //      cy.get('#material-costs-table tbody tr:nth-of-type(1) td:nth-of-type(1)')
            //        .type('Test')
            //  cy.get('#material-costs-table tbody tr:nth-of-type(1) td:nth-of-type(2)')
            //    .type('10')
//        cy.get('#material-costs-table tbody tr:nth-of-type(1) td:nth-of-type(3)')
            //          .type('1000')
            //    cy.contains('Materials').click()
            //   })

            //  it('Capital usage', function() {
            cy.contains('Capital usage').click();
            cy.get('textarea.govuk-textarea[name^=capitalUsageRows]')
                .type('Test text');
            cy.get('[type="radio"]').check('true');
            cy.get('.form-finances-capital-usage-depreciation')
                .type('12');
            cy.get('.form-finances-capital-usage-npv')
                .type('100000');
            cy.get('.form-finances-capital-usage-residual-value')
                .type('50000');
            cy.get('.form-finances-capital-usage-utilisation')
                .type('13');
            cy.contains('Capital usage').click();
            //   })

            //  it('Sub contractor', function() {
            cy.contains('Subcontracting costs').click();
            cy.get('.form-finances-subcontracting-company')
                .type('Name');
            cy.get('input.govuk-input[name$=country]')
                .type('Country');
            cy.get('textarea.govuk-textarea[name$=role]')
                .type('Role');
            cy.get('input.govuk-input[name^=subcontracting][name$=cost]')
                .type('1234');
            cy.contains('Subcontracting costs').click();
            //   })

            // it('Travel and subsistence', function() {
            //Travel and subsistence - Doesnt work
//        cy.contains('Travel and subsistence').click()
            //      cy.get('#travel-costs-table tbody tr:nth-of-type(1) td:nth-of-type(1)')
            //        .type('Test')
            //  cy.get('#travel-costs-table tbody tr:nth-of-type(1) td:nth-of-type(2)')
            //    .type('10')
//        cy.get('#travel-costs-table tbody tr:nth-of-type(1) td:nth-of-type(3)')
            //          .type('100')
            //    cy.contains('Travel and subsistence').click()
//})

            //   it('Other costs', function() {
            cy.contains('Other costs').click();
            cy.get('textarea.govuk-textarea[name$=description]')
                .type('Test');
            cy.get('input.govuk-input[name$=estimate]')
                .type('50');
            cy.get('button:contains("Other costs")').click();
            cy.contains('Other costs').click();
            cy.get('[type="checkbox"]').check();
            cy.contains('Mark').click();
        //})

        //it('Your project location', function() {
            cy.contains('Your project location').click();
            cy.get('#postcode').type('RG87TE');
            cy.contains('Mark').click();
        //})

        //it('Your organisation', function() {
            cy.contains('Your organisation').click();
            cy.get('[type="radio"]').check('MEDIUM');
            cy.get('#financialYearEndMonthValue').type('01');
            cy.get('#financialYearEndYearValue').type('2018');
            cy.get('#annualTurnoverAtLastFinancialYear').type('2018');
            cy.get('#annualProfitsAtLastFinancialYear').type('2018');
            cy.get('#annualExportAtLastFinancialYear').type('2018');
            cy.get('#researchAndDevelopmentSpendAtLastFinancialYear').type('2018');
            cy.get('#headCountAtLastFinancialYear').type('2018');
            cy.get('[type="checkbox"]').check();
            cy.contains('Mark').click();
        //})

        //it('Your funding', function() {
            cy.contains('Your funding').click();
            cy.get('#request-funding-yes').click();
            cy.get('#grantClaimPercentage').type('10');
            cy.get('#other-funding-no').click();
            cy.get('[type="checkbox"]').check();
            cy.contains('Mark').click();
            cy.contains('Return to application overview').click();
            cy.contains('Review and submit').click();
            cy.contains('Submit application').click();
            cy.contains('Yes, I want to submit my application').click();
            cy.contains('Application submitted')
        //})

    })
})
});