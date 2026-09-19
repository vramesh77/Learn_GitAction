import { test } from '../fixtures/fixtures.js';
test('Login to the site', async ({ Loginpage, productpage }) => {
    Loginpage.open();
    Loginpage.Login('standard_user', 'secret_sauce');
    // productpage.handleDialog()
    // await expect(productpage.pageTitle).toHaveText('Products')
});
//# sourceMappingURL=Login.spec.js.map