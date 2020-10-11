
import { HomePageAction } from './../page_action/home.page_action';
import { BootstrapPageAction } from './../page_action/bootstrap.page_action';
import { ServiceActions } from './../service/service.actions';

describe('First test', () => {
  before(() =>  {
    cy.server();
  });

  it('should launch application', () => {
    ServiceActions.routeMyPage();
    cy.launchApp();
    ServiceActions.verifyMyPageResponseStatus();
    HomePageAction.verifyNavigationToW3C('W3Schools Online Web Tutorials');

  });

  it('should navigate to bootstrap page when clicking bootsrap link', () => {
    HomePageAction.clickBootstrapLink();
    BootstrapPageAction.verifyNavigationToBootstrapIsSuccess();
  });
});
