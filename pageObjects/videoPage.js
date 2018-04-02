var page = require('./page');

var videoPage = Object.create(page, { 
  video: { get: function () { return $("#main_content > div.section.media-article.media-article-video > div"); } },

  videoClass: { get: function () { return this.video.getAttribute('class'); } },
		
});

module.exports = videoPage;