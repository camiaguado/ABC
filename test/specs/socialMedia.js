var {expect} = require('chai');
var radioPage = require('../../pageObjects/radioPage.js');

describe('Social media share:', function() {
    
    before(function () {
        browser.url("http://www.abc.net.au/radionational/programs/bigideas/a-fortunate-universe/8076406");
        browser.windowHandleMaximize();
    });  

    it('Can click on facebook and the correct pop-up appears', function() {
        radioPage.facebookClick();
        browser.pause(3000);
        var handle = browser.windowHandles();
        var handle = handle.value[1];
        browser.switchTab(handle);
        var popUpTitle = browser.getUrl();
        expect(popUpTitle).includes("facebook.com/");
        browser.close();
    });
   
    it('Can click on twitter and the correct pop-up appears', function() {
        radioPage.twitterClick();
        browser.pause(3000);
        var handle = browser.windowHandles();
        var handle = handle.value[1];
        browser.switchTab(handle);
        var popUpTitle = browser.getUrl();
        expect(popUpTitle).includes("twitter.com/");
        browser.close();
    });


    it('Click on Download Audio button redirect to the mp3 file', function() {
            browser.windowHandleMaximize();
            radioPage.downloadBtn.waitForVisible(5000);
            radioPage.downloadClick();
            radioPage.mediaContent.waitForVisible(5000);        
            expect(browser.getUrl()).equal("http://mpegmedia.abc.net.au/rn/podcast/2017/02/bia_20170208_2005.mp3");
            browser.back();
        });

});