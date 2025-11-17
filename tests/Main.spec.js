import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import {CartPage} from '../pages/CartPage';


test ('test' , async ({ page}) => {

    //Login 
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('noman','12345');
    await page.waitForTimeout(3000);

    //Home
    const home = new HomePage(page)
    await home.addProductToCart("Iphone 6 32gb")
    await page.waitForTimeout(3000);
    await home.gotoCart();

    //Cart
    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const status = await cart.checkProductInCart('Iphone 6 32gb');
    expect (await status).toBe(true);



})