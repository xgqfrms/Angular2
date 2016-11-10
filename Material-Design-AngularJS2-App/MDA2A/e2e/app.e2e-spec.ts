import { MDA2APage } from './app.po';

describe('mda2-a App', function() {
  let page: MDA2APage;

  beforeEach(() => {
    page = new MDA2APage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
