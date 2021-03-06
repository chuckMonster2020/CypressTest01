// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add('login', () => {
        cy.request({
            method: 'POST',
            //url: 'https://auth.local-dev:9443/idp/profile/SAML2/Redirect/SSO?execution=e1s1',
        url: 'https://ifs.local-dev',
            body:{
                user: {
                    username: 'steve.smith@empire.com',
                    password: 'Passw0rd',
                }
            }
        })
            .then((resp) => {
                window.localStorage.setItem('jwt', resp.body.user.token)
            })
})
