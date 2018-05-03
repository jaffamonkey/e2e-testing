module.exports = (function(settings) {
    var platform = process.platform;

    if(platform === "darwin") {
        settings.selenium.cli_args['webdriver.chrome.driver'] = "./lib/chromedriver_mac64";
    }

    console.info("INFO - The chromedriver for your '"+platform+"' based operation system is configured.");

    return settings;

})(require('./nightwatch.json'));
