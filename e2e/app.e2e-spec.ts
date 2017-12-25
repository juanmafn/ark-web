import { ArkWeb2Page } from './app.po';

describe('ark-web2 App', () => {
  let page: ArkWeb2Page;

  beforeEach(() => {
    page = new ArkWeb2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
