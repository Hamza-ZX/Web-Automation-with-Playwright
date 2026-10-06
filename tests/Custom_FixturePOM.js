import {test as base} from '@playwright/test';
import { Login } from './LoginClassPOM.js';

exports.PomTest = base.test.extend({PomLogin: async({page}, use) =>{

var l = new Login(page);
await l.GotoLoginPage();
await l.LoginData("Admin", "admin123");

await use(page);

}})