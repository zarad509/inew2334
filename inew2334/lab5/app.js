// app.js
// Scraping "Wisdom Quotes" - https://www.brainyquote.com/topics/wisdom-quotes

const express = require('express');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Route to scrape and display 
app.get('/', async (req, res) => {
  const url = 'https://www.brainyquote.com/topics/wisdom-quotes'; // URL to scrape

  try {
    console.log('Launching Puppeteer...');
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });

    const page = await browser.newPage();
    console.log('Navigating to the page...');
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const content = await page.content();
    const $ = cheerio.load(content);

    // Scrape 
    const quotes = [];
    $('div.qotd-q-cntr').each((index, element) => {
      const quote = $(element).find('.oncl_q').text().trim();
      const author = $(element).find('.oncl_a').text().trim();
      if (quote && author) {
        quotes.push({ quote, author });
      }
    });

    await browser.close();
    console.log('Quotes scraped successfully:', quotes);

    // Render  
    res.render('index', { quotes });
  } catch (error) {
    console.error('Error scraping:', error);
    res.send('Something went wrong while scraping.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
