import { ErmalykPage } from './app.po';

describe('ermalyk App', () => {
  let page: ErmalykPage;

  beforeEach(() => {
    page = new ErmalykPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
