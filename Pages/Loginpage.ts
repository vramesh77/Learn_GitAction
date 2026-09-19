import { Page,Locator,expect } from "@playwright/test";
import { Basepage } from "./Basepage.js";

export class Loginpage extends Basepage{

readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
//   readonly errorMessage: Locator;
//   readonly logoText: Locator;
constructor(page:Page){
    super(page)
// keeping the locators for the login page 
this.usernameInput = this.page.getByRole('textbox', { name: /Username/i })
this.passwordInput = this.page.getByPlaceholder('Password')
this.loginButton = this.page.locator('input[type="submit"]')
}

async Login(username:string,password:string):Promise<void>{

await this.usernameInput.fill(username)
await this.passwordInput.fill(password)
await this.loginButton.click()
}



}