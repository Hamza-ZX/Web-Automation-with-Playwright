import {test, expect} from '@playwright/test'; 
import { Login } from './LoginClassPOM.js';


test('Login with Happy flow', async ({page}) => {

var login = new Login(page);
await login.GotoLoginPage();

await login.LoginData("Admin", "admin123");

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

})