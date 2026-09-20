import { Given,When,Then,After } from "@cucumber/cucumber";
import { expect,chromium } from "@playwright/test";
import{Loginpage} from '../../Pages/Loginpage.js'
import{Productpage} from '../../Pages/Productpage.js'


Given('login to the site with {string} and {string}', { timeout: 30 * 1000 }, async function (username, password) {
  // Write code here that turns the phrase above into concrete actions
  this.browser = await chromium.launch()
  const context = await this.browser.newContext()
  context.setDefaultNavigationTimeout(15000)
context.setDefaultTimeout(10000)
  const page = await context.newPage()
  const login = new Loginpage(page)
  await login.open()
  await login.Login(username,password)
   this.product = new Productpage(page)
  await expect(this.product.pageTitle).toHaveText('Products')
  console.log(await this.product.pageTitle.textContent());
  
});

//When('clciking the addtocart for this {product}', async function (product) {
    When('clicking the add to cart for {string}',{ timeout: 30 * 1000 }, async function (productList){
  // Write code here that turns the phrase above into concrete actions
//   await productpage.addproducttocart('Sauce Labs Backpack')//addproducttocart
// await productpage.addproducttocart('Sauce Labs Bolt T-Shirt')
// await productpage.addproducttocart('Sauce Labs Onesie')

const productlist = productList.split(',').map(p=>p.trim())
for(const product of productlist){
await this.product.addproducttocart(product);
}

});

Then('check product added to the cart', async function () {
  // Write code here that turns the phrase above into concrete actions
//  const count = await productpage.getcartcount()
// expect(count).toBe(3)
const count = await this.product.getcartcount()
expect(count).toBe(3)
console.log(count);

});

After(async function () {
  await this.browser?.close()
})