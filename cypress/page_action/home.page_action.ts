import { HomePageObject } from './../page_object/home.page_object';

export class HomePageAction {

  static clickBootstrapLink() {
    cy.clickElement(HomePageObject.linkBootStrap);
  }

}
