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
          }
      }]
}