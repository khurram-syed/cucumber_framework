const {Given, When, Then} = require('cucumber');
//const expect = require('chai').expect;
const homePage = require('../pages/home.page');
const repoListPage= require('../pages/repoList.page');
const guidelinePage= require('../pages/guideline.page')
const basePage = require('../pages/base.page')

Given(/^user has navigated to the Site$/,()=>{
   console.log('user has navigated to the Site...!!!');
   browser.url('./')
   browser.pause(3000);

})

When(/^user clicks on '(.*)' link$/,(linkText)=>{
    basePage.webWaitForVisibleSel(homePage.linkSelector(linkText),10000);
    console.log(`user clicks on ${linkText} link...!!! `);
    basePage.webClick(homePage.linkElement(linkText));
   // browser.pause(2000);
})

Then(/^user should see the message '(.*)'$/,(msg)=>{
    console.log(`user should see the message ${msg} link...!!!`);
    let actualMsg = basePage.webGetText(homePage.homePageMsg);
    expect(actualMsg).includes(msg)
    browser.pause(2000);
})

When(/^user clicks on '(.*)' guideline$/,(guidelineName)=>{
    basePage.webWaitForVisibleSel(repoListPage.guidelineLinkSel(guidelineName),10000);
    console.log(`user clicks on ${guidelineName} gudideline...!!! `);
    basePage.webClick(repoListPage.guidelineLink(guidelineName));
    //browser.pause(3000);
})

Then(/^user should see the following Data Item and action along with their corresponding values$/,(dataTable)=>{
    console.log(`user should see the following Data Item and action along with their corresponding values...!!!`);
    let data = dataTable.raw();
    console.log("Data Table", data);
    for(i=1;i<data.length ; i++){
        console.log(`Data table - Field : ${data[i][0]} - Value : ${data[i][1]} `);
       // console.log("Label :"+guidelinePage.queryLabel(data[i][0]).getText()+"-End");
        expect(data[i][0]).to.be.equal(basePage.webGetText(guidelinePage.queryLabel(data[i][0])));
      //  console.log("Value :"+guidelinePage.queryValueLabel(data[i][0],data[i][1].split(',')[0]).getText()+"-End");
        expect(data[i][1].split(',')[0])
              .to.be.equal(basePage.webGetText(guidelinePage.queryValueLabel(data[i][0],data[i][1].split(',')[0])));
    }
    
    browser.pause(2000);
})


//0- Check the wait for element works or not. - done 
      //-> Only webWaitForVisibleSel(seletor,waitTime=2000) works and you have to give selector not element

//1- Create couple of other tests for table raw and examples - done

//2- Create report and get the screenshot - done

//3- Try to check the report with 3,4 feature files running parallely - done

//4- Check the tagging and how to group it. use also @wip