const { client } = require('nightwatch-cucumber')
const reporter = require('cucumber-html-reporter');
var path = require('path');
var {After, Before} = require('cucumber');
const apickli = require('apickli/apickli');

Before({tags: "@api"}, function () {
    this.apickli = new apickli.Apickli('http', 'httpbin.org');
    this.apickli.addRequestHeader('Cache-Control', 'no-cache');
});

Before(function () {
    return client
    .url(client.launch_url)
});

After(function () {
    return client
        .deleteCookies(function() {
            client.end();
          });});
