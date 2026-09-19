import { test } from '../fixtures/fixtures.js';
import { expect } from '@playwright/test';
test('Login to the site', async ({ Loginpage, productpage, cartpage, checkout }) => {
    Loginpage.open();
    Loginpage.Login('standard_user', 'secret_sauce');
    await expect(productpage.pageTitle).toHaveText('Products');
    productpage.addproducttocart('Sauce Labs Backpack');
    productpage.addproducttocart('Sauce Labs Bolt T-Shirt');
    productpage.addproducttocart('Sauce Labs Onesie');
    const count = await productpage.getcartcount();
    expect(count).toBe(3);
    productpage.removeproducttocart('Sauce Labs Bolt T-Shirt');
    const count2 = await productpage.getcartcount();
    expect(count2).toBe(2);
    productpage.gotoCart();
    cartpage.checkOut();
    checkout.updateCustomerdetails('Veera', 'ramesh', 614016);
    checkout.Orderconfirm();
    expect(await checkout.getOrdercompletemessage()).toContain('Thank you for your order');
    console.log(await checkout.getOrdercompletemessage());
});
//# sourceMappingURL=Ordercreate.spec.js.map