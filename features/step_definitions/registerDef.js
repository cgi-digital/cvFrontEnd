const expect = require('chai').expect

const today = Date.now();
module.exports = function () {
    // Scenatio : 1
    this.Given(/^I visit "([^"]*)"$/, (url) => {
        browser.url(url);
        });

    this.When(/^I enter "([^"]*)" for password$/, (password) => {
        browser.setValue('input[name="Password"]',password );
        });

    this.Then(/^I should have "([^"]*)" password$/,(isTrue) => {
        browser.setValue('input[name="FirstName"]',"name");
        var isStrongEnough = true;
        var isStrong = (isTrue == 'true');
        var innerTexts = browser.elements('div').getText('div',false);
        innerTexts.map((inTxt) => {
            if(inTxt === 'Not Strong enough')
                isStrongEnough = false;
        });

        expect(isStrongEnough).to.be.eql(isStrong);
    });
   

    //Scenario 2
    this.When(/^I enter my "([^"]*)"$/, (password) => {
        browser.setValue('input[name="Password"]',password );
        });

    this.When(/^I enter my "([^"]*)" for re-password$/, (password) => {
        browser.setValue('input[name="ReTypePassword"]',password );
        });

    this.Then(/^I should have "([^"]*)" passwords$/,(isTrue) => {
        browser.setValue('input[name="FirstName"]',"name");
        var doesPasswordMatch = true;
        var isMatching  = (isTrue == 'true');
        var innerTexts = browser.elements('div').getText('div',false);
        innerTexts.map((inTxt) => {
            if(inTxt === "Password does not match")
                doesPasswordMatch = false;
        });
        expect(doesPasswordMatch).to.be.eql(isMatching);
    });


    //Scenario 3
    this.When(/^I enter "([^"]*)" for email$/, (email) => {
        browser.setValue('input[name="Email"]',email );
      });

    this.Then(/^I should have "([^"]*)" email$/,(isTrue) => {
        browser.setValue('input[name="FirstName"]',"name");
        var isValidEmail = true;
        var isValid = (isTrue == 'true');
        var innerTexts = browser.elements('div').getText('div',false);
        innerTexts.map((inTxt) => {
            if(inTxt === "Not a valid Email Address")
                isValidEmail = false;
        });
        expect(isValidEmail).to.be.eql(isValid);
    })

    //Scenario 4
    this.When(/^I enter "([^"]*)" as first name$/,(firstName) => {
        browser.setValue('input[name="FirstName"]',firstName);
        });

    this.When(/^I enter "([^"]*)" as last name$/, (lastName) => {
        browser.setValue('input[name="LastName"]',lastName);
      });

    this.When(/^I enter "([^"]*)" as username$/, (username) => {
        browser.setValue('input[name="Username"]',username);
      });

    this.When(/^I enter "([^"]*)" as email$/, (email) => {
        browser.setValue('input[name="Email"]',email);
      });

    this.When(/^I enter "([^"]*)" as password$/, (password) => {
        browser.setValue('input[name="Password"]',password);
      });

    this.When(/^I enter "([^"]*)" as re password$/,(rePassword) => {
        browser.setValue('input[name="ReTypePassword"]',rePassword);
      });
    
    this.When(/^I click on register$/, () => {
        browser.click('#signUp');
      });

    this.Then(/^I should have "([^"]*)"$/, (isTrue) => {
        browser.waitUntil(() => {
            var errMsg = browser.getText('#username');
           //console.log("error message :", errMsg)
            return ( errMsg === 'Username already Taken');
          }, 5000, 'expected error in less than 5s');
    });

    //Scenario 5
    this.When(/^I enter new username$/,() => {
        console.log(today);
        var username = 'user' + today
        browser.setValue('input[name="Username"]',username);
    });

    this.Then(/^I register and login to CV App$/,() => {
        return 'pending';
      });

}