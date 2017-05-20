import { NPCGalorePage } from './app.po';

describe('npc-galore App', () => {
  let page: NPCGalorePage;

  beforeEach(() => {
    page = new NPCGalorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
