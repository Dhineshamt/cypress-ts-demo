export function launchApp(): void {
  cy.visit('/', { timeout: 100000});
}

export function clickElement(elmt: string): void {
  cy.get(elmt).first().click();
}

Cypress.Commands.add('clickElement', clickElement);
Cypress.Commands.add('launchApp', launchApp);

declare global {
  namespace Cypress {
  interface Chainable {
    launchApp: typeof launchApp;
    clickElement: typeof clickElement;
  }
  }
}
