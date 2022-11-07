describe('Ecommerce App',async()=>
{

xit('Login Invalid',async()=>
{
       await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
      // await console.log(await browser.getTitle())
     //  await expect(browser).toHaveTitleContaining("Login")
      await $("#username").setValue("yasmine.hany@dxc.com")
     // await browser.pause(3000)
    //  await $("input[name='username']").setValue("ja" )
   //   await browser.pause(3000)
      const password = $("//input[@type='password']")
      await password.setValue("123")
      await $("#signInBtn").click()
//      await browser.waitUntil(async()=> await $("#signInBtn").getAttribute('value')==='Sign In',
//      {
      
//             timeout: 5000,
//             timeoutMsg: 'error message is not showing'
        
//      })
//      await console.log(await ( $(".alert-danger")).getText())
await expect($("p")).toHaveTextContaining("username qqis rahulshettyacademy and Password is learning")


})

it('Login successfully',async()=>
{
      await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
      await $("#username").setValue("rahulshettyacademy")
      const password = $("//input[@type='password']")
      await password.setValue("learning")
      await $("#signInBtn").click()
      await ( $(".btn-primary")).waitForExist()
      await expect(browser).toHaveUrlContaining("shop")
      await expect(browser).toHaveTitle("ProtoCommerce")
})


})