export class ServiceActions {

  static routeMyPage() {
    cy.fixture('example').then((data) => {
      cy.route('POST', data.myPageURL).as('response');
    });
  }

  static verifyMyPageResponseStatus() {
    cy.wait('@response').its('status').should('eq', 200);
  }
}
