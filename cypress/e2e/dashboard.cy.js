describe('Dashboard User Flows', () => {
  beforeEach(() => {
    // cy.intercept('', {
    //   method: 'GET',
    //   fixture: '../fixtures/.json'
    // })
    cy.visit('http://localhost:3000/Denver/dashboard')
    //modify this for actual user flow once city is dynamic based on live search
  })

  it('should display nav bar upon page load', () => {
    cy.get('.NavBar-container').should('be.visible')
      .get('.discoverIt-title').should('be.visible')
      .get('.active > h4').should('be.visible')
      .get('[href="/search-page"]').should('be.visible')
      .get('[href="/Denver/saved-places"]').should('be.visible')
      //link above will change to be dynamic - should test for multiple cities
  })

  it('should display background, city title, and category buttons', () => {
    cy.get('html').should('have.css', 'background').and('include', 'http://localhost:3000/static/media/DiscoverItBackground.9076687e3ac2cae6ea07.png')
      .get('.city-name').should('be.visible').and('contain', 'Denver')
      //modify when city name is dynamic and test multiple cities
      .get('.buttons-container').should('be.visible')
      .get('.buttons-container > :nth-child(1)').should('contain', 'Restaurant')
      .get('.buttons-container > :nth-child(2)').should('contain', 'Club')
      .get('.buttons-container > :nth-child(3)').should('contain', 'Bar')
      .get('.buttons-container > :nth-child(4)').should('contain', 'Event')
      .get('.buttons-container > :nth-child(5)').should('contain', 'Mall')
  })

  it('should display all places for the selected city', () => {
    cy.get('.place-card-container').should('be.visible')
      .get('[href="/Denver/1"]').should('exist')
      .get('[href="/Denver/1"]').find('.card-img').should('have.attr', 'alt', 'dons tavern')
      .get('[href="/Denver/2"]').should('exist')
      .get('[href="/Denver/2"]').find('.card-img').should('have.attr', 'alt', 'Larimer Lounge')
      .get('[href="/Denver/3"]').should('exist')
      .get('[href="/Denver/3"]').find('.card-img').should('have.attr', 'alt', "Scruffy Murphy'\s")
      .get('[href="/Denver/4"]').should('exist')
      .get('[href="/Denver/4"]').find('.card-img').should('have.attr', 'alt', 'Meow Wolf')
      .get('[href="/Denver/5"]').should('exist')
      .get('[href="/Denver/5"]').find('.card-img').should('have.attr', 'alt', 'Cherry Creek Mall')
  })

})