var page = require('./page');

var justInPage = Object.create(page, {     

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

});

module.exports = justInPage;