/// <reference types="Cypress" />
import cypress from "cypress";
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../support/PageObject/HomePage'

Given('Navigate to Rahul shetty login page',()=>
{
    cy.visit(Cypress.env('url'))
})

When('Provide userid and password and click on login',function()
{
   cy.get('#username').type(this.data.username)
   cy.get('#password').type(this.data.password)
   cy.get('select').select('Teacher').should('have.value','teach')
   cy.get('#terms').check()
   cy.get('#signInBtn').click()
})

And('Selecting the iphoneX and adding it into cart',function()
{
        const homepage = new HomePage()
        //homepage.getalltheMobilelist
    //    cy.get('body').then(function(body){
    //        if(body.find('.row app-card').length>0){
    //            homepage.getMobileName().each(($el,index,$list)=>{
    //             const text = $el.text()
    //             cy.log(text)
             
    //            })
    //        }
    //    })
    
})

