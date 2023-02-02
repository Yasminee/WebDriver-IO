describe('Ecommerce App',async()=>
{

it('Login Invalid Smoke',async()=>
{

      await browser.url("https://www.google.com/")
      console.log(await browser.getTitle())
})
})