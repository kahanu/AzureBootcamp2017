import { GolfTracker.AngularPage } from './app.po';

describe('golf-tracker.angular App', () => {
  let page: GolfTrackerAngularPage;

  beforeEach(() => {
    page = new GolfTrackerAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
