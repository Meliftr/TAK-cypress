import baseIteraQA from "../support/pageObject/iteraQA/baseIteraQA"
import loginPage from "../support/pageObject/iteraQA/loginPage"
import dasboardPage from "../support/pageObject/iteraQA/dasboardPage"
const loginInput = require("../fixtures/iteraQA/login.json")
const dasboardInput = require("../fixtures/iteraQA/dasboard.json")

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

describe('test sign up scenario', () => {

  const BaseIteraQA = new baseIteraQA ()
  const LoginPage = new loginPage ()
  const DasboardPage = new dasboardPage ()

  beforeEach(() => {
    cy.visit('/')
    cy.get(LoginPage.loginMenu).click()
    cy.get(BaseIteraQA.username).should('be.visible').type(loginInput.usernameLogin)
    cy.get(BaseIteraQA.password).should('be.visible').type(loginInput.passowrdLogin)
    cy.get(LoginPage.loginBtn).click()
    cy.get(LoginPage.labelSuccesLogin).should('contain.text', loginInput.succesLoginTxt)
  })

  it('success add new customer', () => {
    cy.get(DasboardPage.createnewBtn).click()
    cy.get(DasboardPage.name).should('be.visible').type(dasboardInput.nameCustomer)
    cy.get(DasboardPage.company).should('be.visible').type(dasboardInput.companyCustomer)
    cy.get(DasboardPage.address).should('be.visible').type(dasboardInput.addressCustomer)
    cy.get(DasboardPage.city).should('be.visible').type(dasboardInput.cityCustomer)
    cy.get(DasboardPage.phone).should('be.visible').type(dasboardInput.phoneCustomer)
    cy.get(DasboardPage.emial).should('be.visible').type(dasboardInput.emailCustomer)
    cy.get(DasboardPage.saveBtn).click

  })

  it.only('success search base on name customer', () => {
    cy.get(DasboardPage.search).should('be.visible').type(dasboardInput.searchCustomer)
    cy.get(DasboardPage.searchBtn).click()
    cy.get(DasboardPage.labelCustomer).should('contain.text', dasboardInput.labelCustomer)

  })

  it.only('Failed search customer', () => {
    cy.get(DasboardPage.search).should('be.visible').type(dasboardInput.searchNomatch)
    cy.get(DasboardPage.searchBtn).click()
    cy.get(DasboardPage.laberlNomatch).should('contain.text', dasboardInput.nomatchTxt)

  })

  it('success see detail customer', () => {
    cy.get(DasboardPage.search).should('be.visible').type(dasboardInput.searchCustomer)
    cy.get(DasboardPage.searchBtn).click()
    cy.get(DasboardPage.detailBtn).click()
    cy.get(DasboardPage.detailsTxt).should('contain.text', dasboardInput.detailsTxt)

  })

  it('success edit customer', () => {
    cy.get(DasboardPage.search).should('be.visible').type(dasboardInput.searchCustomer)
    cy.get(DasboardPage.searchBtn).click()
    cy.get(DasboardPage.editBtn).click()
    cy.get(DasboardPage.editBtn).should('contain.text', dasboardInput.editTxt)
    cy.get(DasboardPage.city).should('be.visible').type(dasboardInput.cityCustomer)
    cy.get(DasboardPage.saveBtn).click


  })
 

})