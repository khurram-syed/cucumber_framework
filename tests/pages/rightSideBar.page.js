class RightSideBar{
   
    get guidelineIdKey(){return $("//div[.='Guideline']/..//td[2]")}

    rightSideLink(linkText){
        return $("//ul[@class='nav nav-pills nav-stacked']//a[.='"+linkText+"']");
    }

    rightSideLinkSel(linkText){
        return ("//ul[@class='nav nav-pills nav-stacked']//a[.='"+linkText+"']");
    }
}
module.exports= new RightSideBar();