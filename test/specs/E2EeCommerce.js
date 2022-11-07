const expectchai = require('chai').expect
describe('ECommerce App',async()=>
{



it('E2E eCommerce',async()=>
{
    const products = ['iphone X','Blackberry']
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await $("input[name='username']").setValue("rahulshettyacademy")
    const password = $("//input[@type='password']")
    await password.setValue("learning")
    await $("#signInBtn").click()
    const link = await $("*=Checkout")
    await link.waitForExist()  //link Text
    const cards = await $$("div[class='card h-100']")
    for(let i=0 ; i< await cards.length ; i++)
    {
        const card = await cards[i].$("div h4 a")
        if(products.includes(await card.getText()))
        {
            await cards[i].$(".card-footer button").click()
        }
    }
    await link.click()
    const productPrices =await $$("//tr/td[4]/strong ")
    const sumOfProducts = (await Promise.all(await productPrices.map(async (productPrice)=> parseInt((await productPrice.getText()).split(".")[1].trim()))))
    .reduce((acc,price)=>acc+price,0)
    console.log(sumOfProducts)
    const TotalValue = await  $("h3 strong").getText()
    const TotalIntValue =  parseInt(TotalValue.split(".")[1].trim())
    await expectchai(sumOfProducts).to.equal(TotalIntValue)
    await  $(".btn-success").click()
    await  $("#country").setValue("Ind")
    await  $(".lds-ellipsis").waitForExist({reverse:true})
    await  $("=India").click()
    await  $(" input[value='Purchase']").click()
    await expect($(".alert-dismissible")).toHaveTextContaining("Success")

    
    })
})