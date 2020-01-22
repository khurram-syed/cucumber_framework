class HomePage {
   // get linkElement() {return $("//a[.='"+linkText+"']"); }
   get homePageMsg () {return $("//div[@class='alert alert-info']")}
   
   linkElement(linkText){
    return $("//a[.='"+linkText+"']"); 
   }

   linkSelector(linkText){
      return ("//a[.='"+linkText+"']"); 
     }
}
module.exports = new HomePage();