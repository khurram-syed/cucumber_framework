@wip
Feature: 2-Charts Feature
As a tester, I want to check different Charts component
so that I can use them confidently

Background:
    Given user has navigated to the Site

@chart1 @checkScreenshot
 Scenario: 21- Resumed Standard Chart Guideline
   When user clicks on 'TEST' link
   And user clicks on 'chart.clmx' guideline
   And user submits the "first" page with following selections for charts
     | OptionLabel   | Selection       | SelectionType |
     |Time of value 3|01-May-2019 00:00| textbox       |
     |Value 1        | 10              | textbox       |
     |Value 2        | 20              | textbox       |
     |Value 3        | 30              | textbox       |
  When user navigates to "Summary One" from right side bar   
  Then user should see following details "above" the Tabular-Form table on summary page
     | Field        | Value  | 
     | Value 1      | '10'   |


 @chart2 @checkScreenshot
 Scenario: 22- Resumed Standard Chart Guideline
   When user clicks on 'TEST' link
   And user clicks on 'chart.clmx' guideline
   And user submits the "first" page with following selections for charts
     | OptionLabel   | Selection       | SelectionType |
     |Time of value 3|01-May-2019 00:00| textbox       |
     |Value 1        | 10              | textbox       |
     |Value 2        | 20              | textbox       |
     |Value 3        | 30              | textbox       |
   And user gets the guideline instance key from URL or by clicking "Advanced" button on top right  
   And user resumes the guideline with the guideline-key using Resume Guideline functionality on main page
   Then user should see the In-progress action page without any duplication    

