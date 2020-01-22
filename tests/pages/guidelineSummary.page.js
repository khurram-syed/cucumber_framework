class GuidelineSummaryPage{
    
  //For chart  
  get summaryHeading() {return $('div.panel-heading')} 
  get chartCanvas() {return $('canvas#chart1_Canvas')}
  get chart1Canvas() {return $('canvas#Graphone_Canvas')}
  get chart2Canvas() {return $('canvas#Graphtwo_Canvas')}
  get valuesWithDateTime1Lbl() {return $("//div[@class='summary']//fieldset[2]//h2[.='Values with date/time missing:']")}
  get valuesWithDateTime2Lbl() {return $("//div[@class='summary']//fieldset[3]//h2[.='Values with date/time missing:']")}
  get value1Lbl() {return $$("//span[contains(.,'Value 1')]/..")}  
  get value2Lbl() {return $$("//span[contains(.,'Value 2')]/..")}  
  get valuesWithDateMissingLbl() {return $$("//h2[contains(.,'Values with date/time missing:')]")}
  get tableFormLbl() {return $("//fieldset[contains(.,'Tabular Form')]//h2");}
  get tableHeadColLbl() {return $$("//fieldset[contains(.,'Tabular Form')]//tr//table//tr//th")}
  get tableHeadrowvalues() {return $$("//fieldset[contains(.,'Tabular Form')]//tr//table//tr//th")}
  
   tableRowCell(rowNo){
        return $$("//fieldset[contains(.,'Tabular Form')]//tr//table//tr["+rowNo+"]//td")
   }
   
   summaryPageListOption(heading, listOption){
    return $("//h2[.='"+heading+"']/following-sibling::ul/li[contains(.,'"+listOption+"')]")
   }  

   tableHeading(heading){
    return $("//h2[.='"+heading+"']")
   } 

   tableBody(heading){
    return $("//h2[.='"+heading+"']/../table")
   }
  }
  module.exports = new GuidelineSummaryPage();