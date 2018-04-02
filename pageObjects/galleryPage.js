var page = require('./page');

var galleryPage = Object.create(page, {  	
  gallery: { get: function () { return $("#main_content > div.section.media-article.media-article-gallery.media-article-gallery-ssp > div > div > div > div > ul > li"); } },
  galleryClass: { get: function () { return this.gallery.getAttribute('class'); } },
/*  nextBtnClick: { value: function () { 
  		this.nextBtn.click();
  		console.log("despues de click");
  } },

  */
});

module.exports = galleryPage;