var {expect} = require('chai');
var radioPage = require('../../pageObjects/radioPage.js');

describe('Audio Player', function() {
 
    before(function () {
        browser.url("http://radio.abc.net.au/programitem/perDaAW7rD?play=true");
    });  

    it('Audio player loads successfully when you open url', function() {
           expect(radioPage.audioStatus).equal('Playing', 'Audio is not playing.');
        });

});