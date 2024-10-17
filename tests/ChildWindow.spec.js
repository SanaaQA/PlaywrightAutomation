const {test, expect}=require('@playwright/test')


test.only('Childwindow Handling',async({browser})=>
    { const context= await browser.newContext()
      const page = await context.newPage()
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
        const PageBlink = page.locator('.blinkingText')
        const [newPage] = await Promise.all([

        context.waitForEvent('page'),
         PageBlink.click()]) //inside promise.all all the given actions will be performed parellelly 
const text = await newPage.locator('p[class="im-para red"]').textContent()
console.log(text)
 })