import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Navigate to Rahul shetty login page',()=>
{
    cy.visit('https://www.rahulshettyacademy.com/loginpagePractise/')
})

When('Provide userid and password and click on login',function()
{
   cy.get('#username').type('rahulshettyacademy')
   cy.get('#password').type('learning')
   cy.get('select').select('Teacher').should('have.value','teach')
   //cy.get('select.form-control option').select('Teacher')
   
//    .each(($el, index, $list) => {

//     const accounttype = $el.text()
//     if(accounttype==='Teacher')
//     {
//         cy.get('select.form-control option').eq(index).select(accounttype)
//     }
//    })
   cy.get('#terms').check()
   cy.get('#signInBtn').click()
})

Then('User should be able to navigate to Home Page', function()
{
    cy.get('div a.navbar-brand').contains('ProtoCommerce Home')
})


