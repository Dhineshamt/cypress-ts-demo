import { HomePageAction } from '../page_action/home.page_action';
import { launchApp } from '../support/commands/util';

describe('First test', () => {
  it('should launch application', () => {
    cy.launchApp();
    HomePageAction.verifyNavigationToW3C();
  });
});
