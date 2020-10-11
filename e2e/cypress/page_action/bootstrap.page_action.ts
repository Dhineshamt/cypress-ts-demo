
export class BootstrapPageAction {
  static verifyNavigationToBootstrapIsSuccess(): void {
    cy.title().should('eq', 'Bootstrap 3 or Bootstrap 4');
  }
}
