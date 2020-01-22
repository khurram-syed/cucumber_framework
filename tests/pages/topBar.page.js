class TopBar{
    get guidelinesLink(){return $("div#bs-example-navbar-collapse-1 li a")}
    get guidelineInstanceKeyTxtBox(){return $("div#bs-example-navbar-collapse-1 input")}
    get advancedBtn(){return $("div#bs-example-navbar-collapse-1 button:nth-child(2)")}
    get resumedBtn(){return $("div#bs-example-navbar-collapse-1 button.btn-primary")}
    get alertSelBar(){return ("div.alert.alert-danger")}
    get alertBar(){return $("div.alert.alert-danger")}
    get alertBarCloseBtn(){return $("div.alert.alert-danger span")}
}
module.exports= new TopBar();