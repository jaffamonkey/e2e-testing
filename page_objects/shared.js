module.exports = {
    url: 'http://google.com',
    elements: {
        googleSearchField: 'input[name="q"]',
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
        putTextFromSelectorToAnotherSelector: function(selector1, input1){ 
            var text;
            browser.getValue(selector1, function (result) {
                text = result.value;
                browser.setValue(input1, text);
          });
        }   
      }]
}