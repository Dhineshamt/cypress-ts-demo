import { HomePageAction } from './../page_action/home.page_action';


describe('First test', () => {

  it('should launch application', () => {
    cy.visit('/');
    cy.title().should('be', 'W3Schools Online Web Tutorials');
  });

  it('should go to bootstrap page after clicking bootstra link', () => {
    HomePageAction.clickBootstrapLink();
  });
});
