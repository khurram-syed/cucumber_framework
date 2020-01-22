class RepoListPage{

    get guidelineLabels (){return $$('span.guideline-list-label')}
    
    guidelineLink(guidelineName){
        return $("//span[.='"+guidelineName+"']")
    }

    guidelineLinkSel(guidelineName){
        return ("//span[.='"+guidelineName+"']")
    }
}
module.exports = new RepoListPage();