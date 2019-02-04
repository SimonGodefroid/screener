const puppeteer = require('puppeteer');
require('dotenv').config()

const featureName = 'FEATURE_NAME';
const loginUrl = ''
const featureUrl = '';

const username = process.env.NAME;
const pw = process.env.PW;

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 200,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();
    await page.goto(loginUrl);
    await page.type('#auth-username', username);
    await page.type('#auth-password', pw);
    await page.click(
      'body > main > div > div > div > div:nth-child(1) > form > button'
    );
    await page.goto(featureUrl);
    await page.waitFor(2000);
    await page.setViewport({ width: 414, height: 736 }); // iphone 6 7 8 plus
    await page.waitFor(1000);
    await page.screenshot({
      path: `./screens/${featureName}-mobile.png`,
      fullPage: false,
    });
    await page.setViewport({ width: 1024, height: 768 }); // tablet
    await page.waitFor(1000);
    await page.screenshot({
      path: `./screens/${featureName}-tablet.png`,
      fullPage: false,
    });
    await page.setViewport({ width: 1920, height: 855 }); // desktop
    await page.waitFor(1000);
    await page.screenshot({
      path: `./screens/${featureName}-desktop.png`,
      fullPage: false,
    });
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    await browser.close();
  } catch (error) {
    console.log('SOMETHING WENT WRONG', error.message);
  }
})();
