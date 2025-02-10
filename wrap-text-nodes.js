import cheerio from 'cheerio';

function wrapLooseTextNodes(html) {
  const $ = cheerio.load(html);

  $('body').contents().each((index, element) => {
    if (element.type === 'text' && element.data.trim() !== '') {
      $(element).wrap('<p></p>');
    }
  });

  return $.html();
}
