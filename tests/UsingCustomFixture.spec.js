import {expect} from '@playwright/test';
import { MyTest } from './Custom_Fixture.js';

MyTest('Login with Happy flow', async ({LoggedIn}) => {
    
await expect(LoggedIn).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

})

