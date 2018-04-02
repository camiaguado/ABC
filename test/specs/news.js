var {expect} = require('chai');
var newsPage = require('../../pageObjects/newsPage.js');
var justInPage = require('../../pageObjects/justInPage.js');


describe('News home page:', function() {
	
	before(function () {
		browser.url("http://www.abc.net.au/news/");
        browser.windowHandleMaximize();
    });  

    it('Page loaded successful', function() {
        expect(newsPage.headNews.isVisible(3000)).to.be.true;
        expect(newsPage.bodyNews.isVisible(3000)).to.be.true;
        expect(newsPage.footerNews.isVisible(3000)).to.be.true;
    });
   
    it('News banner is loaded', function() {
        expect(newsPage.newsBanner.isVisible(3000));
    });
    
    it('Navigate to the ‘Just In’ page', function() {
    	newsPage.justInClick();
        expect(browser.getUrl()).equal("http://www.abc.net.au/news/justin/");
    });

    it('Content per articule justin page', function() {
        for (var i=1; i<=justInPage.articlesSize; i++){
            expect(justInPage.newsTitle(i)).to.be.true;
            expect(justInPage.newsText(i)).to.be.true;
         }   
    });

    after(function () {
    }); 
});