import { Basepage } from "./Basepage.js";
export class Checkout extends Basepage {
    firstname;
    lastname;
    postcode;
    continue;
    confirmOrder;
    ordermessage;
    constructor(page) {
        super(page);
        this.firstname = this.page.getByRole('textbox', { name: 'First Name' });
        this.lastname = this.page.getByRole('textbox', { name: 'Last Name' });
        this.postcode = this.page.getByRole('textbox', { name: 'Zip/Postal Code' });
        this.continue = this.page.locator('[data-test="continue"]');
        this.confirmOrder = this.page.getByRole('button', { name: 'Finish' });
        this.ordermessage = this.page.getByText('Thank you for your order!');
    }
    // function to fill the deatils
    //function to continue 
    // function to cancel
    //finish order
    async updateCustomerdetails(firstname, lastname, postcode) {
        await this.fill(this.firstname, firstname);
        await this.fill(this.lastname, lastname);
        await this.fill(this.postcode, postcode.toString());
    }
    async clickcontinue() {
        await this.click(this.continue);
    }
    async Orderconfirm() {
        await this.click(this.confirmOrder);
    }
    async getOrdercompletemessage() {
        return await this.getText(this.ordermessage);
    }
}
//# sourceMappingURL=checkoutpage.js.map