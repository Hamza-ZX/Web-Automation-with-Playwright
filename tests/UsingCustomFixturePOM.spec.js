import {expect} from '@playwright/test';
import { PomTest } from './Custom_FixturePOM.js';

PomTest('Login with Happy Flow using POM', async ({PomLogin}) => {

await expect(PomLogin).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    
})