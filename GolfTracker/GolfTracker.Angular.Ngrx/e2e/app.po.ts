import { browser, element, by } from 'protractor';

export class GolfTrackerAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gt-root h1')).getText();
  }
}
