import {test as base} from "@playwright/test";

exports.MyTest = base.test.extend({LoggedIn: async({page}, use) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.locator("//input[@placeholder='Username']").fill("Admin");

await page.locator("//input[@placeholder='Password']").fill("admin123");

await page.locator("//button[@type='submit']").click();

await use(page);

}})

