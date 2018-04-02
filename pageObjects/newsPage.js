var page = require('./page');

var newsPage = Object.create(page, { 
//Home:
	  headNews: { get: function () { return $("head"); } },
	  bodyNews: { get: function () { return $("#newshome"); } },
	  footerNews: { get: function () { return $("#abcFooter"); } },
	  newsBanner: { get: function () { return $("#header"); } },
//JustIn:
	  justInLink: { get: function () { return $("#n-justin > a"); } },
	  justInClick: { value: function () { this.justInLink.click(); } },

	  articules: { get: function () { return $$('.article-index li'); } },
    justInHeader: {get: function(){ return $('#container_subheader > div > div > h1'); }},

    newsTitle: {
      value: function(i) {
              return browser.element("//ul[@class='article-index']//li["+i+"]//h3//a").getText();
                },    
          },    
          
    newsText: {
      value: function(i) {
              return browser.element("//ul[@class='article-index']//li["+i+"]//p[2]").getText();
          }},
  
    newsDate: {
      value: function(i) {
              return browser.element("//ul[@class='article-index']//li["+i+"]//p").getText();
          }},


//Video:
	  video: { get: function () { return $("#main_content > div.section.media-article.media-article-video > div"); } },
  	  videoClass: { get: function () { return this.video.getAttribute('class'); } },

//Gallery:
	  gallery: { get: function () { return $("#main_content > div.section.media-article.media-article-gallery.media-article-gallery-ssp > div > div > div > div > ul > li"); } },
 	  galleryClass: { get: function () { return this.gallery.getAttribute('class'); } },
	    
});

module.exports = newsPage;
