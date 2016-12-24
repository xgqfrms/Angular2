import { N2appPage } from './app.po';

describe('n2app App', function() {
  let page: N2appPage;

  beforeEach(() => {
    page = new N2appPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
