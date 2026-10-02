import{test,expect,chromium} from '@playwright/test'
import path from 'path';
import { fileURLToPath } from 'url'

test('file upload', async()=>{
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const browser = await chromium.launch({channel:'chrome'})
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://the-internet.herokuapp.com/")
await page.getByRole('link', { name: 'File Upload' }).click()
const fileup = page.locator('#file-upload')
const filepath = path.join(__dirname,"../data/Veera img.jpeg")
console.log(filepath);
//await fileup.setInputFiles(filepath)
const [filechooser] = await Promise.all([page.waitForEvent('filechooser'),page.locator('#drag-drop-upload').click()])
await filechooser.setFiles(filepath)
console.log(await page.locator('span:has-text("veera img .jpeg")').textContent())
//await expect( page.locator('span:has-text("veera img .jpeg")')).toContainText("veera")
await context.close()
})