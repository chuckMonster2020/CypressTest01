describe('conditional tests 01', function() {

    it('commands', function () {

        cy.exec('/Users/iannewman/innovation-funding-service/./gradlew initdb flywayclean flywaymigrate syncshib',{failOnNonZero: true})

            //'./gradlew initdb flywayclean flywaymigrate syncshib')

    })
})