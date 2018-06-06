import { OCRTemplatePage } from './app.po';

describe('OCR App', function() {
  let page: OCRTemplatePage;

  beforeEach(() => {
    page = new OCRTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
