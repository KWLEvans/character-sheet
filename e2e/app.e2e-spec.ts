import { CharacterSheetPage } from './app.po';

describe('character-sheet App', () => {
  let page: CharacterSheetPage;

  beforeEach(() => {
    page = new CharacterSheetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
