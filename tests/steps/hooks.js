const {After, Status} = require('cucumber');
var multipleCucumberHtmlReporter = require('wdio-multiple-cucumber-html-reporter');

After((scenarioResult)=>{
    if (scenarioResult.result.status === Status.FAILED) {
        // It will add the screenshot to the JSON
        multipleCucumberHtmlReporter.attach(browser.saveScreenshot(), 'image/png', 'after');
        // Or with
      //  multipleCucumberHtmlReporter.attach(browser.screenshot(), 'image/png', 'after');
    }
    return scenarioResult.status;
});