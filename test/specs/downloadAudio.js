var {expect} = require('chai');
var radioPage = require('../../pageObjects/radioPage.js');

describe('Download audio test', function() {
 
    before(function () {
        browser.url("http://www.abc.net.au/radionational/programs/bigideas/a-fortunate-universe/8076406");
        browser.windowHandleMaximize();
    });  

    it('Click on ‘Download audio’ directed to the mp3 file', function() {
    	   radioPage.downloadBtn.click();
           expect(browser.getUrl(), 'MP3 link is not open').equal('http://mpegmedia.abc.net.au/rn/podcast/2017/02/bia_20170208_2005.mp3');
        });

});