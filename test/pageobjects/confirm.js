class confirm
{
    get country()
    {
       return $("#country")
    }

    get ellipsis()
    {
       return $(".lds-ellipsis")
    }
    
    get IndiaCountry()
    {
       return $("=India")
    }

   async purchase(products)
   {
      await $(" input[value='Purchase']").click()
      await expect($(".alert-dismissible")).toHaveTextContaining("Success")
      console.log($(".alert-dismissible"))
   }
}

module.exports = new confirm()