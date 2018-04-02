var page = require('./page');

var radioPage = Object.create(page, { 
	programsButton: { get: function () { return $('.sf-with-ul'); } },
  programsButtonClick: { value: function() { this.programsButton.click(); }},
	programMenu: { get: function () { return $("#rn-programindex > li:nth-child(2) a"); } }, 
  programMenuClick: { value: function() { this.programMenu.click(); }},
  programPageHeader: { get: function() { return $("#content > div.main.c75l > div > h2")}},
	programGuide: { get: function () { return $$(".at-a-glance li"); } },
	rightArrowBtn: { get: function () { return $('#right-arrow'); } },
	lastProgramClick: { value: function() {
        var i = (this.programGuide.length)-1;
        while((browser.isVisible("//ul[@class='at-a-glance']//li["+i+"]")) == false){
              this.rightArrowBtn.click();
          }
        browser.click("#content > div.section.promo > div > div > div.on-air > ul > li:nth-child("+i+") > a");
        }},
  lastProgram: { get: function(){ 
        var i = (this.programGuide.length)-1;
        return $("#content > div.section.promo > div > div > div.on-air > ul > li:nth-child("+i+") > a > div > div.program");
        }},

  inputSearch: { get: function () { return $('#search-simple-input-query'); } },	
  searchButton: { get: function () { return $('#search-simple-input-submit'); } },
  clickSearchButton: { value: function() { this.searchButton.click(); }},
	resultView: {get: function(){ return $("#content > div.main.c75l > div > div.ct-search-header > p:nth-child(1) > em");}},              
  searchResult:{ value: function() { return this.resultView.getText(); }},   

  facebookBtn: { get: function() { return $('//div[@class="fb-share-button fb_iframe_widget"]'); }},
  facebookClick: { value: function(){ this.facebookBtn.click(); }}, 
  facebookPopUp: { get: function(){}},
  twitterBtn: { get: function() { return $('//iframe[@id="twitter-widget-0"]');}}, 
  twitterClick: { value: function(){ this.twitterBtn.click();}},

  downloadBtn: { get: function() { return $('#content > div.main.c75l > div > div > div.ct-meta-details > ul > li > a'); }},
  downloadClick: { value: function(){ this.downloadBtn.click(); }},
  mediaContent: { get: function() { return $('body > video'); }},
});

module.exports = radioPage;
