import { HomePageObject } from '../page_object/home.page_object';
import { clickElement } from '../support/commands/util';

export class HomePageAction {

  /** Verification actions */
  static verifyNavigationToW3C(title: string) {
      cy.title().should('eq', title);
  }

  /* Click actions */
  static clickBootstrapLink() {
    cy.clickElement(HomePageObject.linkBootStrap);
  }

}
