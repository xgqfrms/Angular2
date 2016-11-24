import { Angular2HerosPage } from './app.po';

describe('angular2-heros App', function() {
  let page: Angular2HerosPage;

  beforeEach(() => {
    page = new Angular2HerosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
