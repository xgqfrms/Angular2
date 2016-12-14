import { MusicSearchAppPage } from './app.po';

describe('music-search-app App', function() {
  let page: MusicSearchAppPage;

  beforeEach(() => {
    page = new MusicSearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
