import { test } from '../fixtures/fixtures.js';
import { expect, Expect } from '@playwright/test';

test('Login to the site', async({Loginpage,productpage})=>{
await Loginpage.open()
await Loginpage.Login('standard_user','secret_sauce')
await productpage.handleDialog()
await expect(productpage.pageTitle).toHaveText('Products')
console.log(await productpage.pageTitle.textContent())

})
