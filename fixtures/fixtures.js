import { test as base } from '@playwright/test';
import { Loginpage } from '../Pages/Loginpage.js';
import { Productpage } from '../Pages/Productpage.js';
import { Checkout } from '../Pages/checkoutpage.js';
import { Cartpage } from '../Pages/cartPage.js';
export const test = base.extend({
    Loginpage: async ({ page }, use) => {
        await use(new Loginpage(page));
    },
    productpage: async ({ page }, use) => {
        await use(new Productpage(page));
    },
    cartpage: async ({ page }, use) => {
        await use(new Cartpage(page));
    },
    checkout: async ({ page }, use) => {
        await use(new Checkout(page));
    }
});
//# sourceMappingURL=fixtures.js.map