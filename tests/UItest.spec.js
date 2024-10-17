const {test, expect}=require('@playwright/test')

test('Invalid Login',async({browser})=>
{ const context= await browser.newContext()
  const page = await context.newPage()
  const username = page.locator('#username')
  const Signin = page.locator('#signInBtn')
  const pw = page.locator('#password')
  const cardTitle = page.locator("div[class='card-body'] h4 a")
   
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
   await username.fill('Sana')
   await pw.fill('test')
   await Signin.click()
   console.log(await page.locator('[style*="block"]').textContent())
    await expect(page.locator('[style*="block"]')).toContainText("Incorrect")

    await username.fill('rahulshettyacademy')
    await pw.fill('learning')
    await Signin.click()
    console.log(await cardTitle.first().textContent())
    console.log(await cardTitle.nth(2).textContent())
    console.log(await cardTitle.allTextContents())


})

test.only('UI Controls',async({page})=>
    {
       
       const username = page.locator('#username')
       const Signin = page.locator('#signInBtn')
       const pw = page.locator('#password')
       const dropdown = page.locator('select[class="form-control"]')

       await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
       await username.fill('Sana')
       await pw.fill('test')
       await dropdown.selectOption('consult')
      await page.pause()
       await Signin.click()
          })