import baseIteraQA from "../support/pageObject/iteraQA/baseIteraQA"
import signupPage from "../support/pageObject/iteraQA/signupPage"
const signupInput = require("../fixtures/iteraQA/signup.json")

describe('test sign up scenario', () => {

  const BaseIteraQA = new baseIteraQA ()
  const SignupPage = new signupPage ()

  beforeEach(() => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get(SignupPage.signupBtn).click()
  })

  it('successfully sign up with credential ', () => {
    cy.get(SignupPage.fName).should('be.visible').type(signupInput.firstname)
    cy.get(SignupPage.surname).should('be.visible').type(signupInput.surname)
    cy.get(SignupPage.epost).should('be.visible').type(signupInput.epost)
    cy.get(SignupPage.mobile).should('be.visible').type(signupInput.mobile)
    cy.get(BaseIteraQA.username).should('be.visible').type(`${Date.now()}`)
    cy.get(BaseIteraQA.password).should('be.visible').type(signupInput.passowrd)
    cy.get(SignupPage.confirmpassword).should('be.visible').type(signupInput.confirmpassword)
    cy.get(SignupPage.submitBtn).click()
    cy.get(SignupPage.labelSuccess).should('contain.text', signupInput.successMsg) 
  })
  
  it(' failed sign up username exsisting', () => {
    cy.get(SignupPage.fName).should('be.visible').type(signupInput.firstname)
    cy.get(SignupPage.surname).should('be.visible').type(signupInput.surname)
    cy.get(SignupPage.epost).should('be.visible').type(signupInput.epost)
    cy.get(SignupPage.mobile).should('be.visible').type(signupInput.mobile)
    cy.get(BaseIteraQA.username).should('be.visible').type(signupInput.usernameExist)
    cy.get(BaseIteraQA.password).should('be.visible').type(signupInput.passowrd)
    cy.get(SignupPage.confirmpassword).should('be.visible').type(signupInput.confirmpassword)
    cy.get(SignupPage.submitBtn).click()
    cy.get(SignupPage.laberUsernameExist).should('contain.text', signupInput.failedMsg) 
  })

  it(' failed sign up empty field mandatory', () => {
    cy.get(SignupPage.submitBtn).click()
    cy.get(SignupPage.fNameRequire).should('contain.text', signupInput.fNameRequire)
    cy.get(SignupPage.surnameRequire).should('contain.text', signupInput.surnameRequire)
    cy.get(SignupPage.usernameRequire).should('contain.text', signupInput.usernameRequire)
    cy.get(SignupPage.passwordRequire).should('contain.text', signupInput.passwordRequire)
  })


})