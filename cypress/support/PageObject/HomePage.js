class HomePage
{

    getalltheMobilelist()
    {
        return cy.get('.row app-card') //List of all the mobiles
    }

    getMobileName()
    {
       return cy.get('.card-title a') //Mobile Name
    }

    getAddbuttonSelect()
    {
        return cy.get('.card-footer button') //Click on Add button
    }



}

export default  HomePage;