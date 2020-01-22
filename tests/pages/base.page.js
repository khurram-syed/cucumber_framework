class BasePage{
  
  //***** This Class is used to do all the Automation Functionality(like click, setValue, IsEnabled etc.) with highlighting the control */   

    waitToLoad(timeInSec=2){
        browser.pause(timeInSec*1000)
    }
   
    highLightControl(element){
        browser.execute("arguments[0].style.border='4px solid blue'", element.value);
    }
    
    webFindElement(selector){
        browser.pause(1000)
        try
          { var element = $(selector)
            this.highLightControl(element)
            return element;
          }catch(error){
              console.log("Find Element Error : "+error)
              return false; 
          } 
    }
    
    webClick(element){
         this.highLightControl(element);
         element.click(); 
    }
   
    webClickSel(sel,waitTime=2000){
        this.webWaitUntilAppeared(sel,10000)
        //this.highLightControl(element);
        return this.webFindElement(sel).click();
    }  

    webLeftClick(element){
        this.highLightControl(element);
        element.leftClick(); 
   }

   webWaitForEnabled(element,waitTime=2000){
    this.highLightControl(element);
    return element.waitForEnabled(waitTime);
   }

webWaitForVisible(element,waitTime=2000){
   var isVisible = element.waitForVisible(waitTime);
   console.log("££££ IsVisible ="+isVisible)
   if(isVisible){
    console.log("££££ iN HIGHLIGHT ="+isVisible)
    this.highLightControl(element);
   }
    return isVisible;
}

webWaitForVisibleSel(seletor,waitTime=2000){
    var isVisible = browser.waitForVisible(seletor,waitTime);
    console.log("££££ IsVisible ="+isVisible)
    if(isVisible){
     console.log("%%%% iN HIGHLIGHT ="+isVisible)
     return this.webFindElement(seletor);
    }
     return false;
 }
webWaitForExist(element,waitTime=2000){
    var isExist = element.waitForExist(waitTime);
    if(isExist){
     this.highLightControl(element);
    }
     return isExist;
 }

 webWaitForExistElement(sel,waitTime=2000){
  try {
       var isExist = element.waitForExist(waitTime);
       if(isExist){
       this.highLightControl(element);
    }
      return isExist;
    }catch(error){
      console.log(error)
   }  
   return false;
 }

 webWaitUntilAppeared(sel,waitTime=2000){
    var flag=browser.waitUntil(()=>{
        console.log("**************")
       if(browser.isVisible(sel)===true){
          console.log("*******FOUND*******") 
          return true;
       }
    },waitTime)
    console.log(`------------------------------------------- Flag : ${flag}`)
    if(flag){
      this.webFindElement(sel);
    }
    return flag;
  }
   
   webDragAndDrop(selector1,selector2){
    this.webFindElement(selector1);
    this.webFindElement(selector2);
    browser.dragAndDrop(selector1,selector2); 
    
   }

    webSetValue(element,value){
        this.highLightControl(element);
        element.setValue(value); 
    }

    webIsEnabled(element){
        this.highLightControl(element);
        return element.isEnabled();
    }

 
    //  webWaitUntilDisappear(element,waitTime=2000){
    //      this.highLightControl(element);
    //     var flag=browser.waitUntil(()=>{
    //         console.log("**************")
    //        return element.isVisible()!==true;
    //     },waitTime)
    //     return flag;
    //  }
   
    webWaitUntilDisappear(element,waitTime=2000){
       var flag=browser.waitUntil(()=>{
           console.log("**************")
          return element.isVisible()!==true;
       },waitTime);
       return flag;
    }
    //  webWaitUntilAppeared(element,waitTime=2000){
    //     var flag=browser.waitUntil(()=>{
    //         console.log("**************")
    //        if(element.isVisible()===true){
    //         console.log("*******FOUND*******") 
    //           return true;
    //        }
    //     },waitTime)
    //     this.highLightControl(element);
    //     return flag;
    //  }
      

     webSetSelectValue(element,value, waitTime=2000){
        this.highLightControl(element);
        element.selectByValue(value);
    }

    webGetSelectValue(element,waitTime=2000){
        this.highLightControl(element);
        return element.getValue();
    }
    
     webMouseOver(element,waitTime=2000){
        this.highLightControl(element);
        element.moveToObject(1,1);
    }

    webGetText(element,waitTime=10000){
        this.webWaitForVisible(element,waitTime)
        //this.highLightControl(element);
        return element.getText();
    }

    webGetTextSel(sel,waitTime=2000){
        this.webWaitUntilAppeared(sel,waitTime)
        //this.highLightControl(element);
        return this.webFindElement(sel).getText();
    }

    webWaitForAlert(waitTime=10000){
        var flag=false;
        flag=browser.waitUntil(()=>{
            try {
                if(browser.alertText()){
                    return true;
                }
            }catch (e){

            }
        }, waitTime);
        return flag;
    }

    webgetAlertText(){
       if(this.webWaitForAlert()){
          return browser.alertText();
       }
       
        return null;
     }

     webacceptAlertText(){
        if(this.webWaitForAlert()){
           return browser.alertAccept();
        }
         return false;
      }

      webacceptAlertText(){
        if(this.webWaitForAlert()){
           return browser.alertDismiss();
        }
         return false;
      }

      webIsAlertDisappeared(){
       try{ if(this.webWaitForAlert(2000)){
           return false;
          }
        }catch(exception) {

         }
         return true;
      }
    
    
}
module.exports = new BasePage();