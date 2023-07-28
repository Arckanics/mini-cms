/// <reference types="cypress" />



describe('initiate', () => {
  it("display the landing page", () => {
    cy.visit('https://www.mini-cms.fr/')
    cy.wait(500)
  })

})

describe('admin page login', () => {

  beforeEach(() => {
    cy.visit('https://www.mini-cms.fr/mini-admin')
  })

  afterEach(() => {
    cy.wait(500)
  })

  it("should redirect to login", () => {
    cy.session('PHPSESSID', () => {})
    cy.url().should('match', /login/)
  })

  it("should return bad credentials", () => {
    cy.get('#email').type("test@test.test")
    cy.get('#password').type("testPassword")
    cy.get('.btn').click()
    cy.intercept('https://www.mini-cms.fr/mini-admin/login').as('getLogin')
    cy.wait('@getLogin').then(res => {
      assert.equal(res.response.statusCode, 401)
    })
  })

  it("should connect", () => {
    cy.visit('https://www.mini-cms.fr/mini-admin')
    cy.get('#email').type("alexis.fritsch68@gmail.com")
    cy.get('#password').type("alefrifououf!1991")
    cy.intercept('https://www.mini-cms.fr/mini-admin/login').as('getLogin')
    cy.get('.btn').click()
    cy.wait('@getLogin').then(res => {
      assert.equal(res.response.statusCode, 200)
    })
  })

  it("should logout", () => {
    cy.wait(1000)
    const link = 'https://www.mini-cms.fr/mini-admin/logout'
    cy.visit(link)
    cy.url().should('match', /login/)
    cy.session('PHPSESSID', () => {})
  })
})