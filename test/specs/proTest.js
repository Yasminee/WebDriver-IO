const loginpage = require('../pageobjects/loginpage')
const shoppage = require('../pageobjects/Shop')
const reviewpage = require('../pageobjects/revview_page')
const confirmpage = require('../pageobjects/confirm.js')
const expectchai = require('chai').expect
const fs = require('fs')
const { use } = require('chai')
let credentials = JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))
let e2ecredentials = JSON.parse(fs.readFileSync('test/testData/E2ETest.json'))


describe('Ecommerce App',async()=>
{
    credentials.forEach(({username,password}) => {
                
       
        xit('Login Invalid',async()=>
        {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("Login")
        await loginpage.Login(username,password)
        await console.log(await  loginpage.alert.getText())
                await browser.waitUntil(async()=> await loginpage.signIn.getAttribute('value')==='Sign In',
                {
                
                        timeout: 5000,
                        timeoutMsg: 'error message is not showing'
                
                })
                await console.log(await  loginpage.alert.getText())
        
                await expect(await loginpage.textInfo).toHaveTextContaining("username is rahulshettyacademy and Password is learning")
        })
   })
   e2ecredentials.forEach(({products}) => {
        it('E2E eCommerce',async()=>
        {
       // const products = ['iphone X','Blackberry']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await loginpage.Login("rahulshettyacademy","learning")
        await shoppage.checkout.waitForExist()  //link Text
        await shoppage.addProductsToCart(products)
        await shoppage.checkout.click()
        let sumOfProducts = await reviewpage.sumOfProducts()
        let TotalIntValue = await reviewpage.totalFormattedPricce()  
        await expectchai(sumOfProducts).to.equal(TotalIntValue)
        await  reviewpage.checkoutSucceed.click()
        await  confirmpage.country.setValue("Ind")
        await  confirmpage.ellipsis.waitForExist({reverse:true})
        await  confirmpage.IndiaCountry.click()
        await  confirmpage.purchase()

        
    })
 })
})

