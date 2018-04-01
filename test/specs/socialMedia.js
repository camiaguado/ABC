var {expect} = require('chai');
var radioPage = require('../../pageObjects/radioPage.js');

describe('Social media share:', function() {
    
    before(function () {
        browser.url("http://www.abc.net.au/radionational/programs/bigideas/a-fortunate-universe/8076406");
    });  
/*
    it('Can click on facebook and the correct pop-up appears', function() {
        browser.windowHandleMaximize();
        radioPage.facebookClick();
        browser.pause(8000);
        browser.windowHandles(function(handles) {
              var popUp = handles.value[1];
              browser.switchTab(popUp);
            });
        var popUpTitle = browser.getUrl();
        console.log(popUpTitle);
        expect(popUpTitle).equal("Post to Facebook");
    });
   
    it('Can click on twitter and the correct pop-up appears', function() {
        browser.windowHandleMaximize();
        radioPage.twitterClick();
        browser.pause(8000);
        var popUpTitle = browser.getTitle();
        console.log(popUpTitle);
        expect(popUpTitle).equal("Comparte un enlace en Twitter");
    });
*/

    it('Click on Download Audio button redirect to the mp3 file', function() {
            radioPage.downloadClick();
            radioPage.mediaContent.waitForVisible(8000);
            
            expect(browser.getUrl()).equal("http://mpegmedia.abc.net.au/rn/podcast/2017/02/bia_20170208_2005.mp3");
        });
});