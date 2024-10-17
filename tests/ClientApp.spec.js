const {test, expect}=require('@playwright/test')
test('Client App demo',async({page})=>
    {
       const ProductList = page.locator("div[class='card-body'] h5 b")
       await page.goto('https://rahulshettyacademy.com/client')
      await  expect(page).toHaveTitle("Let's Shop")
      await page.locator('#userEmail').fill('sanasameer.k@gmail.com')
      await page.locator('#userPassword').fill('Test@1234')
      await page.locator('#login').click()
      await page.waitForLoadState('networkidle')
     console.log( await ProductList.first().textContent())

     console.log( await ProductList.allTextContents())
    })
