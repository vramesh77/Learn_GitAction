import { Page, Locator, expect } from '@playwright/test';

export class Basepage{
readonly page:Page
constructor(page:Page){
    this.page=page
}
//this class can contain open URL, login page, get text for invalid scenarios, check whether any option are visible
//get title, getcurrent url, taking screenshot

async open(){
    await this.page.goto("https://www.saucedemo.com")
}
//used to click multiple places  so making it as common method
async click(locator:Locator):Promise<void>{
await locator.waitFor({state:"visible"})
await locator.click()
}

async getcurrentURL():Promise<string>{
const URL = this.page.url()
return URL
}

async getTitle(){

}

async takeScreenshot(){

}

//used to fill multiple places so making it as common method
async fill(locator: Locator, input:string):Promise<void>{
await locator.waitFor({state:"visible"})
await locator.fill(input)
}

async getText(locator:Locator):Promise<string>{
    await locator.waitFor({state: "visible"})
      return (await locator.innerText()).trim()
}

async isVisible(locator:Locator):Promise<boolean>{
    try {
         await locator.waitFor({state:'visible', timeout:3000})
         return true
    } catch {
        return false
    }

}

}