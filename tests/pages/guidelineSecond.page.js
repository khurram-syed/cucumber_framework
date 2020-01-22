class GuidelineSecondPage{
    
  
  //For chart  
  get chartCanvas() {return $('canvas#chart1_Canvas')}
  get valuesWithDateTime1Lbl() {return $("//div[@class='summary']//fieldset[2]//h2[.='Values with date/time missing:']")}
  get valuesWithDateTime2Lbl() {return $("//div[@class='summary']//fieldset[3]//h2[.='Values with date/time missing:']")}
  get value1Lbl() {return $("//span[contains(.,'Value 1')]/..")}  
  get value2Lbl() {return $("//span[contains(.,'Value 2')]/..")}  
  get confirmButton() {return $("")}

   actionSelectionLabel(actionLabel){
     return $("//strong[contains(.,'"+actionLabel+"')]")
   }  
   actionSelectionChkBox(actionLabel,selectionText){
     return $("//strong[contains(.,'"+actionLabel+"')]/..//following-sibling::div//label[contains(.,'"+selectionText+"')]")
   }  

  decisionLbl(labelText){
        return $("//label[contains(.,'"+labelText+"')]")
    }
    
    decisionLblSel(labelText){
      return ("//label[contains(.,'"+labelText+"')]")
    }

  }
  module.exports = new GuidelineSecondPage();