import { JwtAngular4Page } from './app.po';

describe('jwt-angular4 App', () => {
  let page: JwtAngular4Page;

  beforeEach(() => {
    page = new JwtAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
