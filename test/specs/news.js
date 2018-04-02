var {expect} = require('chai');
var newsPage = require('../../pageObjects/newsPage.js');

describe('News home page:', function() {
	
	before(function () {
		browser.url("http://www.abc.net.au/news/");
        browser.windowHandleMaximize();
    });  

    it('Page loaded successful', function() {
        expect(newsPage.headNews.isVisible());
        expect(newsPage.bodyNews.isVisible());
        expect(newsPage.footerNews.isVisible());
    });
   
    it('News banner is loaded', function() {
        expect(newsPage.newsBanner.isVisible());
    });
    
    it('Navigate to the ‘Just In’ page', function() {
    	newsPage.justInClick();
        expect(browser.getUrl()).equal("http://www.abc.net.au/news/justin/");
    });

    it('Verify content per articule justin page', function() {
        newsPage.justInClick();
        for (var i=1; i<=newsPage.articules.length; i++){
            expect(newsPage.newsTitle(i), "Title of articule number "+i+" is empty" ).to.not.be.empty;
            expect(newsPage.newsDate(i), "Date of articule number "+i+" is not visible").to.not.be.empty;
            expect(newsPage.newsText(i), "Text of articule number "+i+" is empty").to.not.be.empty;
            
         }   

    });

    after(function () {
    }); 

});