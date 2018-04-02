var {expect} = require('chai');
var videoPage = require('../../pageObjects/newsPage.js');


describe('Video test:', function() {
	
	before(function () {
		browser.url("http://www.abc.net.au/news/2017-02-09/weatherill-promises-to-intervene-dramatically/8254908");  
        browser.windowHandleMaximize();
    });  

    it('Video loads successfuly', function() {
        videoPage.video.waitForExist(3000);
        expect(videoPage.videoClass).equal('inline-content video article video-16x9');
    });

    after(function () {
    }); 
});