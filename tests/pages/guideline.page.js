class GuidelinePage{
  
    headingLbl(lblTxt){
        return $("//h3[.='"+lblTxt+"']");
    }

    headingLblSel(lblTxt){
        return ("//h3[.='"+lblTxt+"']");
    }

    queryLabel(lblTxt){
        return $("//strong[.='"+lblTxt+"']");
    }

    queryValueLabel(lblTxt,valueTxt){
        return $("//strong[.='"+lblTxt+"']/../..//label[.='"+valueTxt+"']");
    }
}
module.exports = new GuidelinePage();