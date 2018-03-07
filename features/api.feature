@api
Feature: httpbin.org api test

	Scenario: Setting headers in GET request
		Given I set User-Agent header to apickli
		When I GET /get
		Then response code should be 200