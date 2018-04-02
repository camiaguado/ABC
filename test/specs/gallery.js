var {expect} = require('chai');
var galleryPage = require('../../pageObjects/galleryPage.js');


describe('Gallery page:', function() {
	
	before(function () {
		browser.url("http://www.abc.net.au/news/2017-02-10/abc-open-pic-of-the-week/8256256");  
        browser.windowHandleMaximize();
    });  

    it('Images loads successfuly', function() {
        galleryPage.gallery.waitForExist(3000);
        expect(galleryPage.galleryClass).equal('lslide loaded active');        
    });

    after(function () {
    }); 
});