const expectchai = require('chai').expect

describe('Functional Testing',async()=>
{

xit('Scrolling and mouse hover',async()=>
{
   await browser.url("https://rahulshettyacademy.com/AutomationPractice/ ")
   await $("#mousehover").scrollIntoView()
   await browser.pause(2000)
   await $("#mousehover").moveTo()
   await browser.pause(2000)
   await $("=Top").click()
   await browser.pause(2000)
   await browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")
   await $("button").doubleClick()
    console.log(await browser.isAlertOpen())
    expectchai(await browser.isAlertOpen()).to.be.true
    expectchai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
    await browser.pause(2000)
    await browser.acceptAlert()
    await browser.pause(2000)     
})
it('Web table sort validation Smoke',async()=>
{

    await browser.url("/seleniumPractise/#/offers")
    //await $("tr th:nth-child(1)").click()
     //retrive list of veggie names into array A
     //sort the array A ->Array B
     //compare Array A and Array B //fail
     const veggiesLocators =  await $$("tr td:nth-child(1)")
     const OriginalveggiesNames = await veggiesLocators.map(async veggie=> await veggie.getText())
     console.log(OriginalveggiesNames)
     veggies =  OriginalveggiesNames.slice()
      //Arrays are pass by reference
     sortedVeggies = veggies.sort()
     console.log(sortedVeggies)
      expectchai(OriginalveggiesNames).to.eql(sortedVeggies)
})

it('Web table Filter validation',async()=>
{
    await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers ")
    await $("input[type='search']").setValue("tomato")
     const veggies = await $$("tr td:nth-child(1)")
     await expect(veggies).toBeElementsArrayOfSize({eq:1})
     console.log( await (veggies[0]).getText())
     await expect (await veggies[0]).toHaveText("Tomto")
})
})