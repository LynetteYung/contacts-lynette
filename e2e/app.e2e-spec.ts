import { ContactsLynettePage } from './app.po';

describe('contacts-lynette App', () => {
  let page: ContactsLynettePage;

  beforeEach(() => {
    page = new ContactsLynettePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
