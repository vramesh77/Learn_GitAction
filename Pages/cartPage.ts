import { Page,Locator,expect } from "@playwright/test";
import { Basepage } from "./Basepage.js";

export class Cartpage extends Basepage{

readonly Proceedtocheckout: Locator
readonly shoppingcart : Locator
readonly itemname: Locator
readonly items:Locator


constructor(page:Page){

    super(page)
    this.Proceedtocheckout= this.page.getByRole('button', { name: 'Checkout' })
    this.shoppingcart=this.page.getByRole('button', { name: 'Continue Shopping' })
    this.itemname=this.page.locator('.inventory_item_name')
    this.items= this.page.locator('.cart_item')
    
}

async checkOut():Promise<void>{
    await this.click(this.Proceedtocheckout)
}

async getItemname():Promise<string[]>{
return this.itemname.allInnerTexts()
}

async getItemcount():Promise<number>{
return this.items.count()
}

async continueShop():Promise<void>{
await this.click(this.shoppingcart)
}



}