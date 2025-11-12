import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test ('test' , async ({ page}) => {

    //Login 

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('noman','12345');
    await page.waitForTimeout(3000);

})