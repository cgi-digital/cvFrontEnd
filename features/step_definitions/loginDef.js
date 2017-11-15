const expect = require('chai').expect;

module.exports = function () {
    // Scenario : 1
    this.Given(/^I go to "([^"]*)"$/ , (url) => { 
        browser.url(url);
      });

    this.When(/^I enter username "([^"]*)"$/ ,(username) => {
        browser.setValue('input[name="Username"]',username);
      });

    this.Then(/^I see username "([^"]*)"$/,(username) => {
        expect(browser.getValue('input[name="Username"]')).to.be.eql(username);
        
    });


    // Scenario : 2
    this.When(/^I click on Login/,() => { 
        browser.click('#login');
      });

    this.Then(/^show required fields/,() => { 
        var required = false;
        var innerTexts = browser.elements('div').getText('div',false);
        innerTexts.map((inTxt) => {
            if(inTxt === 'Required')
                required = true;
        });
        expect(required).to.be.eql(true);
    });


    // Scenario : 3
    this.When(/^I enter "([^"]*)" for username$/,(username) => {
        browser.setValue('input[name="Username"]',username);
        });

    this.When(/^I enter password "([^"]*)"$/,(password) => {
        browser.setValue('input[name="Password"]',password);
        });

    this.When(/^I click on button Login/,() =>{
        browser.click('#login');
        });

    this.Then(/^show "([^"]+)" or "([^"]+)"$/,(invalideMsg,anotherInvalideMsg) => {
        browser.waitUntil(() => {
            var errMsg = browser.getText('#errField');
            return ( errMsg === invalideMsg || errMsg === anotherInvalideMsg )
          }, 5000, 'expected error in less than 5s');
    });


    // Scenario : 4
    this.When(/^I am not logged in$/, () => {
        browser.deleteCookie('CUSTOM_SESSION');
        expect(browser.getCookie('CUSTOM_SESSION')).to.be.null;
      });

    this.When(/^I enter "([^"]*)" for correct username$/,(username) => {
        browser.setValue('input[name="Username"]',username);
      });

    this.When(/^I enter password correct "([^"]*)"$/,(password) => {
        browser.setValue('input[name="Password"]',password);
      });

    this.When(/^I click on button correctly Login/,() =>{
         browser.click('#login');
     });

    this.Then(/^I should be logged in/,() => {
        browser.waitUntil(() => {
             return browser.getCookie('CUSTOM_SESSION') != null
           }, 5000, 'expected cookie to be set in less than 5s');
      });

}