import { test, expect, chromium } from "@playwright/test";

test("Browser Fixture", async ({ page, browser }) => {
  var browser1 = await chromium.launch();
  var context = await browser1.newContext();
  var page1 = await context.newPage();


  await page1.goto("https://www.google.com");
});