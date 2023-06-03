import baseIteraQA from "../support/pageObject/iteraQA/baseIteraQA"
import loginPage from "../support/pageObject/iteraQA/loginPage"
const loginInput = require("../fixtures/iteraQA/login.json")

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

describe('test sign up scenario', () => {

  const BaseIteraQA = new baseIteraQA ()
  const LoginPage = new loginPage ()

  beforeEach(() => {
    cy.visit('/')
    cy.get(LoginPage.loginMenu).click()
    cy.get(BaseIteraQA.username).should('be.visible').type(loginInput.usernameLogin)
    cy.get(BaseIteraQA.password).should('be.visible').type(loginInput.passowrdLogin)
    cy.get(LoginPage.loginBtn).click()
    cy.get(LoginPage.labelSuccesLogin).should('contain.text', loginInput.succesLoginTxt)
  })

  it('success add new customer', () => {
    cy.get(':nth-child(4) > .btn').click()
    cy.get('#Name').should('be.visible').type('meli')
    cy.get('#Company').should('be.visible').type('PT A')
    cy.get('#Address').should('be.visible').type('Sancang')
    cy.get('#City').should('be.visible').type('Bogor')
    cy.get('#Phone').should('be.visible').type('08222222')
    cy.get('#Email').should('be.visible').type('melinda@gamil.com')
    cy.get('.col-md-offset-2 > .btn').click

  })

  it.only('success search base on name customer', () => {
    cy.get('#searching').should('be.visible').type('Patty Romaguera')
    cy.get('.container > div > form > .btn').click()

  })
 

})