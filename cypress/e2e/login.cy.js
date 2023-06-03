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
  })

  it.only('succes login with credential', () => {
    cy.get(BaseIteraQA.username).should('be.visible').type(loginInput.usernameLogin)
    cy.get(BaseIteraQA.password).should('be.visible').type(loginInput.passowrdLogin)
    cy.get(LoginPage.loginBtn).click()
    cy.get(LoginPage.labelSuccesLogin).should('contain.text', loginInput.succesLoginTxt)
  })

  it('Failed login with wrong credential', () => {
    cy.get(BaseIteraQA.username).should('be.visible').type(loginInput.usernameLogin)
    cy.get(BaseIteraQA.password).should('be.visible').type(loginInput.passwordFailed)
    cy.get(LoginPage.loginBtn).click()
    cy.get(LoginPage.labelFailedLogin).should('contain.text', loginInput.failedLoginTxt)
  })

  it('Failed login empty field', () => {
    cy.get(LoginPage.loginBtn).click()
    cy.get(LoginPage.labelFailedLogin).should('contain.text', loginInput.failedLoginTxt)
  })

  it('succes logout', () => {
    cy.get(BaseIteraQA.username).should('be.visible').type(loginInput.usernameLogin)
    cy.get(BaseIteraQA.password).should('be.visible').type(loginInput.passowrdLogin)
    cy.get(LoginPage.loginBtn).click()
    cy.get(LoginPage.logoutbtn).click()
    cy.get(LoginPage.labelLogin).should('contain.text', loginInput.loginTxt)
  })
 

})