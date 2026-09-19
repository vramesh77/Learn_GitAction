import { Basepage } from "./Basepage.js";
export class Cartpage extends Basepage {
    Proceedtocheckout;
    shoppingcart;
    itemname;
    items;
    constructor(page) {
        super(page);
        this.Proceedtocheckout = this.page.getByRole('button', { name: 'Checkout' });
        this.shoppingcart = this.page.getByRole('button', { name: 'Continue Shopping' });
        this.itemname = this.page.locator('.inventory_item_name');
        this.items = this.page.locator('.cart_item');
    }
    async checkOut() {
        await this.click(this.Proceedtocheckout);
    }
    async getItemname() {
        return this.itemname.allInnerTexts();
    }
    async getItemcount() {
        return this.items.count();
    }
    async continueShop() {
        await this.click(this.shoppingcart);
    }
}
//# sourceMappingURL=cartPage.js.map