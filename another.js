const puppeteer = require('puppeteer');
//const { default: puppeteer, Browser } = require("puppeteer")

async function getMapsData() {
  browser = await puppeteer.launch({
    headless: false,
    args: ["--disabled-setuid-sandbox", "--no-sandbox"],
  });

  const page = await Browser.newPage();
  await page.setExtraHTTPHeaders({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4882.194 Safari/537.36",
  })

  await page.goto("https://www.google.com/maps/search/Starbucks/@26.8484046,75.7215344,12z/data=!3m1!4b1" , {
            waitUntil: 'domcontentloaded',
            timeout: 60000
  })

  await page.waitForTimeout(3000);

  let data = await scrollPage(page,".m6QErb[aria-label]",2)

  console.log(data)
  await browser.close();
} 
