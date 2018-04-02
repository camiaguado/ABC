var {expect} = require('chai');
var radioPage = require('../../pageObjects/radioPage.js');

describe('Radio test page:', function() {
	
	before(function () {
		browser.url("http://www.abc.net.au/radionational/");
        browser.windowHandleMaximize();
    });  

    it('Can navigate to a program from the programs sub-menu', function() {
        radioPage.programsButtonClick();
    	radioPage.programMenuClick();
        console.log("la rul que toma:"+browser.getUrl());
        expect(browser.getUrl()).equal("http://www.abc.net.au/radionational/programs/archived/");
        browser.back();
    });
   
    it('Select last program in the program guide banner', function() {
        radioPage.lastProgramClick();
        radioPage.programPageHeader.waitForVisible(9000);
        expect((browser.getTitle()).includes(radioPage.lastProgram.getText()));  
    	browser.back();
    });
    
    it('Can search for content in the search bar and that content is returned', function() {
    	radioPage.inputSearch.setValue('Search Test');
    	radioPage.clickSearchButton();
    	radioPage.resultView.waitForVisible(9000);
    	expect((radioPage.searchResult()).includes("Search Test"));	
        browser.back();
    });

    after(function () {
    }); 
});
