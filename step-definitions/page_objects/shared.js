const { client } = require('nightwatch-cucumber')

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
        clickLinkByText: function(linkText){      
           linkText = linkText.replace(/\s/g, '');  
           console.log(linkText);  
           return this
            .waitForElementVisible('@'+linkText, 1000)
            .click('@'+linkText);
        },
        clickLinkByPureText: function(linkText){      
            return this.click('link text', linkText);
        },
        putTextFromSelectorToAnotherSelector: function(selector1, input1){ 
            var text;
            this.getValue(selector1, function (result) {
                text = result.value;
                browser.setValue(input1, text);
          });
        },
        // e2e login
        loggedInAs:function(string){ 
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
                      if(result.value == false) {
                        this.click(string)
                      };
                    });
            });
        },
        // Click radio option is not previously selected
        clickRadioIfOptionPresent: function(elem, toClick){ 
            return this.api.element('css selector', elem , function (result) {
                if (result.value.ELEMENT) {
                    return this  
                    .clickLinkByPureText(toClick)   
                }
                else{ 
                    return this
                    }
              })  
        }
    }]
}