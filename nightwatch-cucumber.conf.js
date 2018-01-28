const parseArgs = require('minimist');

const args = parseArgs(process.argv.slice(2));

const conditionalArgs = [];

if (args.coverage) {
  conditionalArgs.push('--require', 'coverage/hooks.js');
  conditionalArgs.push('--tags', '@smoke or @regression or @deep or @analytics');
}

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'timeout.js',
    '--require', 'support/event-handlers.js',
    '--require', 'features/step-definitions',
    ...conditionalArgs,
    '--format', 'pretty',
    '--format', 'json:reports/cucumber.json',
    'features'
  ]}
);

module.exports = (function(settings) {
  //settings.selenium.start_process = false;
  //settings.test_workers = {
  //  "enabled": true,
  //  "workers": "auto"
  //};
  settings.test_settings.default.screenshots.path = "./reports/screenshots";
  settings.output_folder =  "./reports";
  settings.src_folders = null;
  settings.custom_commands_path = null;
  settings.page_objects_path = null;

  return settings;
})(require('./nightwatch.json'));

