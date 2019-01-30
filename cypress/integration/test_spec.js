describe('Test', function () {
  beforeEach(function () {
    // // reset and seed the database prior to every test
    // cy.exec('npm run db:reset && npm run db:seed')

    // // seed a user in the DB that we can control from our tests
    // // assuming it generates a random password for us
    // cy.request('POST', '/test/seed/user', { username: 'jane.lane' })
    //   .its('body')
    //   .as('currentUser')
  })

  it(' checks if the page loaded ', function () {
    cy.visit('/')
    cy.get('.App').should('exist')
  })
})