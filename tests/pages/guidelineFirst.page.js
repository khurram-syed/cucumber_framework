class GuidelineFirstPage{
   
    //Common element
    get nextBtn() { return $('a#next')}
    get backBtn() { return $('a#back')}
    get backBtnSel() { return 'a#back';}
  
    // For distance guideline
    get distanceToCoverLbl(){ return $("//div[@class='div-striped']//strong[contains(.,'Distance To Cover')]")}
    get distanceToCoverLblSel(){ return ("//div[@class='div-striped']//strong[contains(.,'Distance To Cover')]")}
    get distanceToCoverTxtBox(){return $('div.div-striped input')}
  
  // For Chart guideline
    get timeOfValueTxtBox(){return $('input.rw-widget-input')}
    get timeOfValueTxtBoxSel(){return ('input.rw-widget-input')}
    get value1TextBox(){return $('div#value-1 .textbox-inputview')}
    get value1TextBox(){return $('div#value-2 .textbox-inputview')}
    get value1TextBox(){return $('div#value-3 .textbox-inputview')}
    get headingSel(){return ('div.container-fluid h3')}
    get heading(){return $('div.container-fluid h3')}
    get  questionActionOrderLbl(){return $$("//div[@class='row']//div[@class='div-striped']//strong") } 

    valueTextBox(textboxNo){
        return $("div#value-"+textboxNo+" .textbox-inputview input")
    }

    chartTwoQuestionTxtBox(textBoxText){
      return $$("div .textbox-inputview input")
    }
    
    multipleSummaryQuestionTxtBoxes(){
      return $$("div .textbox-inputview input")
    } 

    multipleChoiceRadio(question,option){
       return $("//strong[contains(.,'"+question+"')]/../..//label[contains(.,'"+option+"')]");
    }

    valueTextBoxLbl(textboxLblText){
        return $("//div[@class='div-striped']//strong[.='"+textboxLblText+"']")
    }

    questionTxtBox(question){
      return $("//strong[contains(.,'"+question+"')]/../following-sibling::div//input");
    }

    questionTxtBoxSel(question){
      return ("//strong[contains(.,'"+question+"')]/../following-sibling::div//input");
    }

    questionLbl(question){
      return $("//strong[contains(.,'"+question+"')]");
    }

    dateTimeTxtBoxBtn(question){
      return $("//strong[contains(.,'"+question+"')]/../following-sibling::div//button");
    }

    timeTxtBoxBtnSel(question){
      return ("//strong[contains(.,'"+question+"')]/../following-sibling::div//button[@title='Select time']");
    }

    timeTxtBoxBtn(question){
      return $("//strong[contains(.,'"+question+"')]/../following-sibling::div//button[@title='Select time']");
    }
    multipleChoiceCheckBox(question,option){
      return $("//strong[contains(.,'"+question+"')]/../..//label[.='"+option+"']");
   }

   singleCheckBox(question){
      return $("//strong[contains(.,'"+question+"')]/../..//label");
   } 

   decisionRadioButton(decisionLabel,optionLabel){
      return $("//strong[contains(.,'"+decisionLabel+"')]/../..//label[contains(.,'"+optionLabel+"')]");
   }

   questionDropDown(question){
       var elements = $$("//strong[contains(.,'"+question+"')]/../following-sibling::div//select")
       return elements[0];
   } 
  

}
  module.exports = new GuidelineFirstPage();