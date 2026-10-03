import{test,expect} from '@playwright/test'

test('login to sfcc', async({page})=>{
await page.goto("https://demowebshop.tricentis.com/")
await page.getByRole('link', { name: 'Register' }).click()
//await page.getByLabel('Male').click()
await page.getByRole('textbox', { name: 'First name:' }).fill("")
await page.getByRole('textbox', { name: 'Last name:' }).fill("")
await page.getByRole('textbox', { name: 'Email:' }).fill("")
await page.getByLabel('Password:', { exact: true }).fill("veera@123")
await page.getByLabel('Confirm password:', { exact: true }).fill("veera@123")
await page.locator('#register-button').click()
await expect(page.getByText('First name is required.', { exact: true })).toHaveText("First name is required.")
await expect(page.getByText('Last name is required.', { exact: true })).toHaveText("Last name is required.")
})