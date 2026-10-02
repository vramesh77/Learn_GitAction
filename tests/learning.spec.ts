import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch({ headless: false }); // set false to actually see it
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://in.bookmyshow.com/explore/home/chennai');

  await page.waitForTimeout(3000); // just to visually confirm before closing

  await context.close();
  await browser.close(); // don't forget this
})();