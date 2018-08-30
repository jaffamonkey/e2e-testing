const {
    client
} = require('nightwatch-cucumber')

module.exports = {
    url: 'http://google.com',
    elements: {
        googleSearchField: 'input[name="q"]',
        selector: 'input[name="par_data_authority_id"]',
        newperson: 'input[name="par_data_person_id"]',
        neworg: 'input[name="par_data_organisation_id"]',
        Logout: '.button'
    },
    commands: [{
        clickLinkByText: function(linkText) {
            linkText = linkText.replace(/\s/g, '');
            console.log(linkText);
            return this
                .waitForElementVisible('@' + linkText, 1000)
                .click('@' + linkText);
        },
        clickLinkByPureText: function(linkText) {
            return this.click('link text', linkText);
        },
        putTextFromSelectorToAnotherSelector: function(selector1, input1) {
            var text;
            this.getValue(selector1, function(result) {
                text = result.value;
                browser.setValue(input1, text);
            });
        },
        // e2e login
        loggedInAs: function(string) {
            return this
                .clickLinkByPureText('Log in')
                .setValue('#edit-name', string)
                .setValue('#edit-pass', 'TestPassword')
                .click('#edit-submit')
                .waitForElementVisible('#footer', 15000)
                .assert.containsText('body', 'Log out')
        },
        // Click checbox is not previously checked
        clickCheckboxIfUnselected: function(string) {
            return this.element('id', string, (response) => {
                this.elementIdSelected(response.value.ELEMENT, (result) => {
                    if (result.value == false) {
                        this.click(string)
                    };
                });
            });
        },
        // Click radio option is not previously selected
        clickRadioIfOptionPresent: function(elem, toClick) {
            return this.api.element('css selector', elem, function(result) {
                if (result.value.ELEMENT) {
                    return this
                        .clickLinkByPureText(toClick)
                } else {
                    return this
                }
            })
        },
        // Based on Levenshtein distance
        checkSimilarity: function(s1, s2) {
            function editDistance(s1, s2) {
                s1 = s1.toLowerCase();
                s2 = s2.toLowerCase();

                var costs = new Array();
                for (var i = 0; i <= s1.length; i++) {
                    var lastValue = i;
                    for (var j = 0; j <= s2.length; j++) {
                        if (i == 0)
                            costs[j] = j;
                        else {
                            if (j > 0) {
                                var newValue = costs[j - 1];
                                if (s1.charAt(i - 1) != s2.charAt(j - 1))
                                    newValue = Math.min(Math.min(newValue, lastValue),
                                        costs[j]) + 1;
                                costs[j - 1] = lastValue;
                                lastValue = newValue;
                            }
                        }
                    }
                    if (i > 0)
                        costs[s2.length] = lastValue;
                }
                return costs[s2.length];
            };
            var longer = s1;
            var shorter = s2;
            if (s1.length < s2.length) {
                longer = s2;
                shorter = s1;
            }
            var longerLength = longer.length;
            if (longerLength == 0) {
                return 1.0;
            }
            var variance = (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
            console.log(variance)
            return variance
        },
    }]

}