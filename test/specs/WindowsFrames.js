describe('Windows Frames',async()=>
{



xit('parent and chils switch',async()=>
{
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await $(".blinkingText").click()
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[1])
    console.log(await $("h1").getText())
    console.log(await browser.getTitle())
    await browser.closeWindow()
    await browser.switchToWindow(handles[0])
    console.log(await browser.getTitle())
    await browser.newWindow("https://google.com/")
    console.log(await browser.getTitle())
    await browser.pause(3000)
    await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await browser.getTitle())
    await  $("#username").setValue("jasmnie")
    await browser.pause(3000)
    
})

it('Frames',async()=>
{

    await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
    await  $("#mousehover").scrollIntoView()
    console.log(await $$("a").length)
    await  browser.switchToFrame(await $("iframe"))
    console.log( await $("=Courses").getTagName())
    console.log(await $$("a").length)
    await browser.switchToFrame(null)
    console.log(await $$("a").length)

})

})
