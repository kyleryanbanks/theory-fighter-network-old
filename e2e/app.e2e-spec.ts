import { TheoryFighterNetworkPage } from './app.po';

describe('theory-fighter-network App', () => {
  let page: TheoryFighterNetworkPage;

  beforeEach(() => {
    page = new TheoryFighterNetworkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
