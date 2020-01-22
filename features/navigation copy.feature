Feature: 3- COPY Navigation Feature

Background:
    Given user has navigated to the Site

@test1
Scenario: 31- COPY Checking if the Guidelines link takes back to home page
   When user clicks on 'TEST' link
   And user clicks on 'Guidelines' link
   Then user should see the message 'Please select a location from the list on the left'
 @test2
 Scenario: 32- COPY Checking for multiple guidelines on a single repo
   When user clicks on 'TEST' link
   And user clicks on 'ARZ 2522 Action and data.clmx' guideline
   Then user should see the following Data Item and action along with their corresponding values
     |Field Name  | Values       |
     |Things      | Clouds, Waves|
     |An action  | Confirm1,Cancel|
   
