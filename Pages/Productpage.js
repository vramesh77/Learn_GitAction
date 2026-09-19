import { Basepage } from "./Basepage.js";
export class Productpage extends Basepage {
    itemname;
    productcards;
    cartBtn;
    pageSort;
    handburger;
    carticon;
    pageTitle;
    constructor(page) {
        super(page);
        this.pageTitle = this.page.locator('.title');
        this.itemname = this.page.locator('.inventory_item_name');
        this.productcards = this.page.locator('.inventory_item');
        this.cartBtn = this.page.locator('.shopping_cart_link');
        this.pageSort = this.page.locator('.product_sort_container');
        this.handburger = this.page.locator('#react-burger-menu-btn');
        this.carticon = this.page.locator('.shopping_cart_badge');
    }
    addproductbutton(productname) {
        return this.page.locator('.inventory_item').filter({ hasText: productname }).getByRole('button', { name: 'Add to cart' });
    }
    removeproductbutton(productname) {
        return this.page.locator('.inventory_item').filter({ hasText: productname }).getByRole('button', { name: 'Remove' });
    }
    async addproducttocart(productname) {
        await this.click(this.addproductbutton(productname));
    }
    async removeproducttocart(productname) {
        await this.click(this.removeproductbutton(productname));
    }
    async getcartcount() {
        const visible = this.isVisible(this.carticon);
        if (!visible)
            return 0;
        const text = await this.getText(this.carticon);
        return parseInt(text, 10);
    }
    async gotoCart() {
        await this.click(this.cartBtn);
    }
    async handleDialog() {
        this.page.on('dialog', async (dialog) => {
            console.log(dialog.type());
            console.log(dialog.message());
            await dialog.accept();
        });
    }
}
//# sourceMappingURL=Productpage.js.map