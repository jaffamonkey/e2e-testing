const { client } = require('nightwatch-cucumber')
const reporter = require('cucumber-html-reporter');
var path = require('path');
var {After, Before} = require('cucumber');

Before(function () {
    return client
    .url(client.launch_url)
 });

After(function () {
    await driver.close();
    await sleep(1000);
    await driver.quit();
 });});

// After(function () {
//     return client
//         .deleteCookies(function() {
//             client.end();
//           });});
