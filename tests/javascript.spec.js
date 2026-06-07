const {test, expect} = require('@playwright/test');

test('search', async ({page}) => {
   
   await page.goto('https://letcode.in/test');
   //await page.waitForTimeout(500000);
   await page.getByText(' Edit ').click();
   await page.waitForTimeout(300000);
   await page.locator('#fullName').fill('Goodluck');
   await page.waitForTimeout(400000);
   const a = await page.locator('#join').getAttribute('value');
   console.log(a)
   await page.waitForTimeout(400000);
   await page.goBack();
   await page.waitForTimeout(400000);
   const b =await page.title();
   console.log(b)


});