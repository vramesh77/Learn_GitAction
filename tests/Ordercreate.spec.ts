import { test } from '../fixtures/fixtures.js';
import { expect, Expect } from '@playwright/test';
// npx tsc -- to compile the whole project from ts to Js

test('Login to the site', async({Loginpage,productpage,cartpage,checkout})=>{
await Loginpage.open()
await Loginpage.Login('standard_user','secret_sauce')
await expect(productpage.pageTitle).toHaveText('Products')
await productpage.addproducttocart('Sauce Labs Backpack')
await productpage.addproducttocart('Sauce Labs Bolt T-Shirt')
await productpage.addproducttocart('Sauce Labs Onesie')
const count = await productpage.getcartcount()
expect(count).toBe(3)
await productpage.removeproducttocart('Sauce Labs Bolt T-Shirt')
const count2 = await productpage.getcartcount()
expect(count2).toBe(2)
await productpage.gotoCart()
await cartpage.checkOut()
await checkout.updateCustomerdetails('Veera', 'ramesh', 614016)
await checkout.clickcontinue()
await checkout.Orderconfirm()
expect(await checkout.getOrdercompletemessage()).toContain('Thank you for your order')
console.log(await checkout.getOrdercompletemessage());

})