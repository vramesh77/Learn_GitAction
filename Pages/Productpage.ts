import { Page,Locator,expect } from "@playwright/test";
import { Basepage } from "./Basepage.js";

export class Productpage extends Basepage{
readonly itemname : Locator
readonly productcards: Locator 
readonly cartBtn:Locator
readonly pageSort : Locator
readonly handburger : Locator
readonly carticon: Locator
readonly pageTitle:Locator

constructor(page:Page){
super(page)
this.pageTitle = this.page.locator('.title');
this.itemname= this.page.locator('.inventory_item_name')
this.productcards= this.page.locator('.inventory_item')
this.cartBtn= this.page.locator('.shopping_cart_link')
this.pageSort= this.page.locator('.product_sort_container')
this.handburger= this.page.locator('#react-burger-menu-btn')
this.carticon= this.page.locator('.shopping_cart_badge')
}

private addproductbutton(productname:string):Locator{
    return this.page.locator('.inventory_item').filter({ hasText: productname }).getByRole('button', { name: 'Add to cart' })
}

private removeproductbutton(productname:string):Locator{
    return this.page.locator('.inventory_item').filter({ hasText: productname }).getByRole('button', { name: 'Remove' })
}


async addproducttocart(productname:string):Promise<void>{
    await this.click(this.addproductbutton(productname))
}

async removeproducttocart(productname:string):Promise<void>{
    await this.click(this.removeproductbutton(productname))
}

async getcartcount():Promise<number>{
    const visible = this.isVisible(this.carticon)
    if(!visible) return 0;

        const text = await this.getText(this.carticon)
        return parseInt(text, 10)
    }

async gotoCart():Promise<void>{
    await this.click(this.cartBtn)
}

  async handleDialog(){
    this.page.on('dialog', async dialog=>{
       console.log(dialog.type())
    console.log(dialog.message()); 
    await dialog.accept()
    })
  }




}


