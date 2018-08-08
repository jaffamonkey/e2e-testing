const { client } = require('nightwatch-cucumber')
var {Before} = require('cucumber');

Before(function () {
    return client
    .url(client.launch_url)
 });
