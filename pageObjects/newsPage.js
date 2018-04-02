var page = require('./page');

var newsPage = Object.create(page, { 
  headNews: { get: function () { return $("head"); } },
	bodyNews: { get: function () { return $("#newshome"); } },
  footerNews: { get: function () { return $("#abcFooter"); } },
  newsBanner: { get: function () { return $("#header"); } },
  justInLink: { get: function () { return $("#n-justin > a"); } },
  justInClick: { value: function () { this.justInLink.click(); } },
  
  
});

module.exports = newsPage;
