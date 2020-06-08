/* global describe, it, cy */
describe('Mi primer test', function () {
  it('viendo si funciona', function () {
    cy.visit('/')
  })

  it('Navegando a una categoria', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Navegar con la navbar al home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('los usuarios registrados ven el formulario de registro e inicio de sesion al ir a favs', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
