export function clickElement(elmt: string): void {
  cy.get(elmt).first().click();
}

Cypress.Commands.add('clickElement', clickElement);

declare global {
  namespace Cypress {
  interface Chainable {
    clickElement: typeof clickElement;
  }
  }
}
