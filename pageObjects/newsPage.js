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

	  articlesSize: { get: function () { return $('.article-index li').length; } },
      justInHeader: {get: function(){ return $('#container_subheader > div > div > h1'); }},

      newsTitle: {
        value: function(i) {
                var title=browser.element("#main_content > div > div > div.c75l > div > ul > li:nth-child("+i+") > h3 > a").getText();
                 if((title == null) || (title.equals("")))
                        return false;
                 else
                        return true;
                    },    
            },    
            
      newsText: {
        value: function(i) {
                var text=browser.element("#main_content > div > div > div.c75l > div > ul > li:nth-child("+i+") > p:nth-child(4)").getText();
                 if((text == null) || (text.equals("")))
                        return false;
                 else
                        return true;
                    },    
            },
//Video:
	  video: { get: function () { return $("#main_content > div.section.media-article.media-article-video > div"); } },
  	  videoClass: { get: function () { return this.video.getAttribute('class'); } },

//Gallery:
	  gallery: { get: function () { return $("#main_content > div.section.media-article.media-article-gallery.media-article-gallery-ssp > div > div > div > div > ul > li"); } },
 	  galleryClass: { get: function () { return this.gallery.getAttribute('class'); } },
	    
});

module.exports = newsPage;
