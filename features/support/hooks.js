const reporter = require('cucumber-html-reporter');
var path = require('path');
var {After, AfterAll, Before, BeforeAll} = require('cucumber');
const apickli = require('apickli');

Before({tags: "@api"}, function () {
    this.apickli = new apickli.Apickli('http', 'httpbin.org');
    this.apickli.addRequestHeader('Cache-Control', 'no-cache');
});

AfterAll(function () {
    reporter.generate({
        theme: 'bootstrap',
        jsonFile: path.join('reports', 'cucumber.json'),
        output:  path.join('reports', 'nightwatch-cucumber-report.html'),
        reportSuiteAsScenarios: true,
        launchReport: false
    });
});