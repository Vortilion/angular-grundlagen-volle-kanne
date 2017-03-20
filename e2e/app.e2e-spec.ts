import { VolleKannePage } from './app.po';

describe('volle-kanne App', () => {
  let page: VolleKannePage;

  beforeEach(() => {
    page = new VolleKannePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
