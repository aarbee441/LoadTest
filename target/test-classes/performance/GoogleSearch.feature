Feature: Load Test


  Background:
    * url 'https://google.com/search?q='


  Scenario: Get load of users
    Given path 'shoes'
    When method get
    Then status 200