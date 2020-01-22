@test
Feature: 1- Navigation Feature

Background:
    Given user has navigated to the Site

@test11
Scenario: 21- Checking if the Guidelines link takes back to home page
   When user clicks on 'TEST' link
   And user clicks on 'Guidelines' link
   Then user should see the message 'Please select a location from the list on the left'
 @test12
 Scenario: 22- Checking for multiple guidelines on a single repo
   When user clicks on 'TEST' link
   And user clicks on 'ARZ 2522 Action and data.clmx' guideline
   Then user should see the following Data Item and action along with their corresponding values
     |Field Name  | Values       |
     |Things      | Clouds, Waves|
     |An action   | Confirm,Cancel|
   
@test13 @checkScreenshot @wip
Scenario Outline: 23- Checking if the Guidelines link takes back to home page
   When user clicks on '<RepoLink>' link
   And user clicks on 'Guidelines' link
   Then user should see the message 'Please select a location from the list on the left'
   Examples:
        | RepoLink       | 
        | TEST           | 
        | SIMPLE1         | 
        | CLINICALFOLDER | 
