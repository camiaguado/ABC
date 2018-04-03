var {expect} = require('chai');
var radioPage = require('../../pageObjects/radioPage.js');

describe('Audio Player test', function() {
 
    before(function () {
        browser.url("http://radio.abc.net.au/programitem/perDaAW7rD?play=true");
        browser.windowHandleMaximize();
    });  

    it('Audio player loads successfully when you open url', function() {
           expect(radioPage.audioStatus, 'Audio is not playing.').equal('Playing');
        });

});