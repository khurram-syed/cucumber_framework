const {Given, When, Then } = require('cucumber');
var guidelineFirstPage= require('../pages/guidelineFirst.page');
var guidelineSecondPage= require('../pages/guidelineSecond.page');
var guidelineSummaryPage= require('../pages/guidelineSummary.page');
var rightSideBar = require('../pages/rightSideBar.page');
var topBar = require('../pages/topBar.page');
var basePage = require('../pages/base.page')
var guidelinePage = require('../pages/guideline.page')

var guidelineKey=null;
    When(/^user submits the "(.*)" page with following selections for charts$/,(pageName,dataTable)=>{
    
        console.log("user submits the "+pageName+" page with following selections for charts..!");
        var data = dataTable.raw();
        // basePage.waitToLoad(1.5);
        basePage.webWaitForVisibleSel(guidelinePage.headingLblSel('Default'),10000);
        for(i=1; i< data.length;i++){
            console.log(pageName+" Page Element :"+data[i] )
            if(data[i][0].includes("Time of value")){
                basePage.webSetValue(guidelineFirstPage.timeOfValueTxtBox,data[i][1]);
            }else if(data[i][0].includes("Value")){
                basePage.webSetValue(guidelineFirstPage.valueTextBox(i-1),data[i][1]);
            }else if(data[i][0].includes("question")){
                var optionName = data[i][0].split(" ")
                console.log("Page Name : ====>  "+optionName[0])
                basePage.webSetValue(guidelineFirstPage.chartTwoQuestionTxtBox()[i-1],data[i][1]);
            }else if(data[i][0].includes("Enter whole")){
                console.log("Option Label : ====>  "+data[i][0])
                basePage.webSetValue(guidelineFirstPage.multipleSummaryQuestionTxtBoxes()[i-1],data[i][1]);
            }else if(data[i][2].includes("radio")){
                console.log("Option Label : ====>  "+data[i][0] )
                var element = guidelineFirstPage.multipleChoiceRadio(data[i][0],data[i][1]);
                basePage.webClick(element);
            }
            else {
                throw "NO VALUE MATCHED...!!!!!"
            }
        }
        basePage.webClick(guidelineFirstPage.nextBtn);
    });
 
    When(/^user confirms the "(.*)" action$/,(actionName)=>{
        console.log("user confirms the "+actionName+" action ..!!!");
        basePage.waitToLoad(1.5);
        basePage.webWaitForVisible(guidelineSecondPage.actionSelectionLabel(actionName),5000);
        basePage.webClick(guidelineSecondPage.actionSelectionChkBox(actionName,"Confirm"));
        basePage.webClick(guidelineFirstPage.nextBtn);
        basePage.waitToLoad(1.5);
    });

    When(/^user navigates to "(.*)" from right side bar$/, (linkName) => {
        console.log(`user navigates to "${linkName}" from right side bar...!!!`);
        basePage.waitToLoad(2);
        basePage.webClick(rightSideBar.rightSideLink(linkName));
        basePage.waitToLoad(2);
        basePage.webWaitForVisible(guidelineSummaryPage.summaryHeading, 5000);
        basePage.waitToLoad(2);
    });
   
    Then(/^user should see following details "(.*)" the Tabular-Form table on summary page$/,(position,dataTable)=>{
        console.log("user should see following details "+position+" the Tabular-Form table ..!!!");
        basePage.waitToLoad(2);
        var data = dataTable.raw();
        basePage.webWaitForVisible(guidelineSummaryPage.chartCanvas,2000);
        for(i=1; i< data.length;i++){
            console.log(position+" Summary page Element :"+data[i] )
            if(position.includes("above")){
                expect(basePage.webWaitForVisible(guidelineSummaryPage.valuesWithDateMissingLbl[0])).to.be.true;
                expect(basePage.webGetText(guidelineSummaryPage.value1Lbl[i-1])).to.include(data[i][0])
                expect(basePage.webGetText(guidelineSummaryPage.value1Lbl[i-1])).to.include(data[i][1])
            }else if(position.includes("under")){
                expect(basePage.webWaitForVisible(guidelineSummaryPage.valuesWithDateMissingLbl[1])).to.be.true
                expect(basePage.webGetText(guidelineSummaryPage.value2Lbl[i-1])).to.include(data[i][0])
                expect(basePage.webGetText(guidelineSummaryPage.value2Lbl[i-1])).to.include(data[i][1])
            }else {
                throw "NO VALUE MATCHED...!!!!!"
            }
        }
        basePage.waitToLoad(2.5);
    });

    Then(/^user should see following details in Tabular-Form table on summary page$/,(dataTable)=>{
    
        console.log("user should see following details in Tabular-Form table ..!!!");
        var data = dataTable.raw();
        var i = 0;
        for(i=1; i< data.length;i++){
            console.log("First Page Element :"+data[i] )
            if(data[i][0].includes("Time entered")){
                expect(basePage.webGetText(guidelineSummaryPage.tableHeadColLbl[0])).to.include(data[i][0])
                expect(basePage.webGetText(guidelineSummaryPage.tableHeadColLbl[1])).to.include(data[i][1])
                expect(basePage.webGetText(guidelineSummaryPage.tableHeadColLbl[2])).to.include(data[i][2])
            }else if(data[i][0].includes("Value")){
                expect(basePage.webGetText(guidelineSummaryPage.tableRowCell(i+1)[0])).to.include(data[i][0])
                expect(basePage.webGetText(guidelineSummaryPage.tableRowCell(i+1)[1])).to.include(data[i][1])
                expect(basePage.webGetText(guidelineSummaryPage.tableRowCell(i+1)[2])).to.include(data[i][2])
            }else{
                throw "No Table Value Found..!!"
            }
        }
        basePage.waitToLoad(1.5);
    });
 
    When(/^user gets the guideline instance key from URL or by clicking "(.*)" button on top right$/,(btnName)=>{
        console.log(`user gets the guideline instance key from URL or by clicking "${btnName}" button on top right...!!!`);
        basePage.waitToLoad(1);
        //basePage.webWaitForVisible(guidelineSecondPage.actionSelectionLabel("action1"),5000);
        basePage.webClick(topBar.advancedBtn);
        basePage.waitToLoad(1.5);
        guidelineKey = basePage.webGetText(rightSideBar.guidelineIdKey)
        basePage.waitToLoad(1);
        basePage.webClick(topBar.guidelinesLink);
        basePage.waitToLoad(1.5);
    });

    When(/^user resumes the guideline with the guideline-key using Resume Guideline functionality on main page$/,()=>{
        console.log(`user resumes the guideline with the guideline-key using Resume Guideline functionality on main page...!!!`);
        basePage.waitToLoad(1.5);
        basePage.webSetValue(topBar.guidelineInstanceKeyTxtBox,guidelineKey);
        basePage.webClick(topBar.resumedBtn)
        basePage.waitToLoad(1.5);
    });

    Then(/^user should see the In-progress action page without any duplication$/,()=>{
        console.log("user should see the In-progress action page without any duplication..!!!");
        expect(basePage.webWaitForVisible(guidelineSecondPage.actionSelectionLabel("action1"))).to.be.true;
        basePage.waitToLoad(2);
    });

    Then(/^user should see two graphs in "(.*)" view$/,(linkText)=>{
        console.log(`user should see two graphs in "${linkText}" view`);

        expect(basePage.webWaitForVisible(guidelineSummaryPage.chart1Canvas)).to.be.true;
        expect(basePage.webWaitForVisible(guidelineSummaryPage.chart2Canvas)).to.be.true;
        basePage.waitToLoad(1.5);
    });

    Then(/^user should see the following details under the headings$/,(dataTable)=>{
        console.log("user should see the following details under the headings ..!!!");
        var data = dataTable.raw();
       // basePage.webWaitForVisible(guidelineSummaryPage.chartCanvas,2000);
        for(i=1; i< data.length;i++){
            //console.log(position+" Summary page Element :"+data[i] )
         if(data[i][0].includes("Table")){
            expect(basePage.webWaitForVisible(guidelineSummaryPage.tableHeading(data[i][0]))).to.be.true;
            expect(basePage.webWaitForVisible(guidelineSummaryPage.tableBody(data[i][0]))).to.be.true;
         }else{
            let headingLabel = data[i][0].includes(".") ? data[i][0].split(".")[0] : data[i][0]; 
            let headingOption = data[i][1].includes(".") ? data[i][1].split(".")[0] : data[i][1];
            expect(basePage
                  .webWaitForVisible(guidelineSummaryPage.summaryPageListOption(headingLabel,headingOption))).to.be.true;
         }          
        }
        basePage.waitToLoad(2);
    });

    Then(/^user should see graph no "(.*)"$/,(graphNo)=>{
        console.log(`user should see graph no "${graphNo}"`);
        if(graphNo=="one"){
            expect(basePage.webWaitForVisible(guidelineSummaryPage.chart1Canvas)).to.be.true;
        }else{
           expect(basePage.webWaitForVisible(guidelineSummaryPage.chart2Canvas)).to.be.true;
        }   
        basePage.waitToLoad(1.5);
    });