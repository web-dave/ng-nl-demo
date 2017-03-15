import { NgNlDemoPage } from './app.po';

describe('ng-nl-demo App', () => {
  let page: NgNlDemoPage;

  beforeEach(() => {
    page = new NgNlDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
