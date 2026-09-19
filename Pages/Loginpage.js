import { Basepage } from "./Basepage";
export class Loginpage extends Basepage {
    usernameInput;
    passwordInput;
    loginButton;
    //   readonly errorMessage: Locator;
    //   readonly logoText: Locator;
    constructor(page) {
        super(page);
        // keeping the locators for the login page 
        this.usernameInput = this.page.getByRole('textbox', { name: /Username/i });
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.locator('input[type="submit"]');
    }
    async Login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
//# sourceMappingURL=Loginpage.js.map