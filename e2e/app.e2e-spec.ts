import { TwitterAngularPage } from './app.po';

describe('twitter-angular App', () => {
  let page: TwitterAngularPage;

  beforeEach(() => {
    page = new TwitterAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
