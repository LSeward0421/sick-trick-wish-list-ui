describe('Sick Trick Wish List App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      body: [
        {
          id: 1,
          name: 'kickflip',
          stance: 'regular',
          obstacle: 'flatground',
          tutorial: 'https://www.example.com/kickflip-tutorial',
        },
      ],
    })
    cy.visit('http://localhost:3000/')
  });

  it('should display the correct info on the page upon loading', () => {
    cy.get('h1').contains('Sick Trick Wish List');
    cy.get('.create-trick').should('exist')
    cy.get('.trick').contains('Kickflip');
    cy.get('.trick').contains('Flatground');
    cy.get('.trick').contains('https://www.example.com/kickflip-tutorial');
  });

  it('should have a form with the correct inputs to add a new trick', () => {
    cy.get('.create-trick').within(() => {
      cy.get('input[type="text"]').first().should('have.attr', 'placeholder', 'Name of Trick');
      cy.get('select').eq(0).should('contain', 'Regular').and('contain', 'Switch');
      cy.get('select').eq(1).should('contain', 'Flatground')
        .and('contain', 'Ledge')
        .and('contain', 'Rail')
        .and('contain', 'Stairs')
        .and('contain', 'Pool');
      cy.get('input[type="text"]').last().should('have.attr', 'placeholder', 'Link to Tutorial');
      cy.get('button[type="submit"]').contains('SEND IT!');
    });
  });

  it('should add a new trick to the DOM', () => {
    cy.get('input[type="text"]').first().type('Larry-Loop-Loo');
    cy.get('select').eq(0).select('Regular');
    cy.get('select').eq(1).select('Rail');
    cy.get('input[type="text"]').last().type('https://www.example.com/larry-loop');
    cy.get('button[type="submit"]').click();
    
    cy.get('.trick').last().within(() => {
      cy.get('h3').contains('Larry-loop-loo');
      cy.get('p').contains('Rail');
      cy.get('a').contains('https://www.example.com/larry-loop').should('have.attr', 'href', 'https://www.example.com/larry-loop');
    });
  });    
});

