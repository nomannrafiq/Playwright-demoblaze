exports.HomePage = class HomePage {

    constructor(page){
        this.page = page;
        this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCartbtn = '//a[normalize-space()="Add to cart"]';
        this.cart = '#cartur';
    }

    async addProductToCart(productName) {
        // Find and click the product from the list
        const productList = await this.page.$$(this.productList);

        for (const product of productList) {
            const text = await product.textContent();
            if (text.trim() === productName) {
                await product.click();
                break;
            }
        }

        // Wait for the Add to Cart button to appear
        await this.page.waitForSelector(this.addToCartbtn, { timeout: 10000 });

        // Handle alert dialog before clicking
        this.page.once('dialog', async dialog => {
            console.log('Alert message:', dialog.message());
            await dialog.accept();
        });

        // Click the Add to Cart button
        await this.page.locator(this.addToCartbtn).click();
    }

    async gotoCart() {
        await this.page.locator(this.cart).click();
    }
};
