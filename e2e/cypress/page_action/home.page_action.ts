import { HomePageObject } from '../page_object/home.page_object';
import { clickElement } from '../support/commands/util';

export class HomePageAction {

  /** Verification actions */
  static verifyNavigationToW3C() {
    cy.fixture('example').then((data) => {
      cy.title().should('eq', data.title);
    });
  }

  /* Click actions */
  static clickBootstrapLink() {
    cy.clickElement(HomePageObject.linkBootStrap);
  }

}
