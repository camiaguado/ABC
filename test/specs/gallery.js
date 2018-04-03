var {expect} = require('chai');
var galleryPage = require('../../pageObjects/newsPage.js');


describe('Gallery page test:', function() {
	
	before(function () {
		browser.url("http://www.abc.net.au/news/2017-02-10/abc-open-pic-of-the-week/8256256");  
        browser.windowHandleMaximize();
    });  

    it('Images loads successfuly', function() {
        galleryPage.gallery.waitForExist(3000);
        expect(galleryPage.galleryClass).include('active');        
    });
});