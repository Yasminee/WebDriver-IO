const expectchai = require('chai').expect

describe('UIControls Test Suite',async()=>
{



xit('Login successfully',async()=>
{
      await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
      await $("#username").setValue("rahulshettyacademy")
      const password = $("//input[@type='password']")
      await password.setValue("learning")
      const radiobuttons = await $$(".customradio")
      const user =  radiobuttons[1]
      await user.$("span").click()
      const model = await $(".modal-body")
      await model.waitForDisplayed()
      await $("#cancelBtn").click()
      console.log(await $$(".customradio")[0].$("span").isSelected())
      await user.$("span").click()
      await model.waitForDisplayed()
      await $("#okayBtn").click()
      await  $$(".customradio")[0].$("span").click()
      await expect(model).not.toBeDisabled()
      const dropdown = $("select.form-control")
      await dropdown.selectByAttribute('value','teach')
      await browser.pause(2000)
      await dropdown.selectByVisibleText('Consultant')
      await browser.pause(2000)
      await dropdown.selectByIndex(0)
      await browser.pause(2000)
      console.log(await dropdown.getValue())
      expectchai(await dropdown.getValue()).to.equal("stud")
})

xit('Dynamic dropdown',async()=>
{
      await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
      await $("#autocomplete").setValue("ind")
      await browser.pause(3000)
       let items = await $$("[class='ui-menu-item'] div")
       for(let i=0;i< await items.length;i++)
       {
            if(await( items[i]).getText() === "India")
            {
                  await( items[i]).click()
                 await browser.pause(2000)
            }
          

       }
})
it('Dynamic dropdown',async()=>
{
      await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
      const elements = await $$("input[type='checkbox']")
      await elements[1].click()
      console.log(await( elements[1]).isSelected())
      console.log(await( elements[2]).isSelected())
      await browser.saveScreenshot("screen.png")
})


})