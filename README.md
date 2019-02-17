[![Build Status](https://travis-ci.org/jaffamonkey/nightwatchjs-cucumberjs4.svg?branch=master)](https://travis-ci.org/jaffamonkey/nightwatchjs-cucumberjs4)
# e2e-testing
End-to-End Testing with Nightwatch and Cucumber.  Nightwatch is a browser automation framework component, supporting many browsers (inlcuding Electron). Tests are coded in Nodejs, and run against a Selenium/WebDriver server. API testing is also supported.

### Step 1

Install all dependencies

```
$ npm install
```

### Step 23

To run (and generate html report):

```
$ node_modules/.bin/nightwatch -c ./conf/nightwatch-cucumber.conf.js -e default && node generate-report.js
```

To run tests in parallel (and generate html report):

```
$ node_modules/.bin/nightwatch -c ./conf/nightwatch-cucumber-parallel.conf.js && node generate-report.js
```

To run by tag

```
$ node_modules/.bin/nightwatch -c ./conf/nightwatch-cucumber-parallel.conf.js -- --tag tagname
```


### Step 3

Generate HTML report (with screenshots)

```
$ node generate-report.js
```


# iOS testing

Using Appium - in order to run tests against, you will need Xcode installed, to use the simulators.

Prequisistes:
XCode 9.2+


There are enough emulators that come with XCode package, but to install new ones, you will need to open from Xmcode app:

* Xcode > Open Developer Tool > Simulator
* In Simulator go to: Hardware > Device > Manage Devices
* In devices window at the bottom of the left column, click the Add button (+)
* Now follow the dialog.

To run:

$ npm install -g appium
$ appium
[NEW CONSOLE TAB]
$ npm run nightwatch-cucumber-ios -- --tag iostest
