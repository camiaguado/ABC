var {assert} = require('chai');
var rest = require('urllib-sync').request;
//var radioPage = require('../../pageObjects/jsonPage.js');
var envar = require('envar');

describe('Json tests:', function() {
/*    var env = envar("env") || "prod";
    if(env === "prod"){
        url = "http://program.abcradio.net.au";
    }else if(env === "test"){
        url = "http://test-program.abcradio.net.au";
         }else if(env === "stage"){
            url = "http://staging-program.abcradio.net.au";
                }
*/
    

    it('Verify the key/value pairs', function() {
 //       var url = enviorment();
        var url;
               
        var env = envar("env") || "prod";
        switch(env){
              case 'prod':
                url = "http://program.abcradio.net.au";
                break;
              case 'test':
                url = "http://test-program.abcradio.net.au";
                break;
              case 'stage':
                url = "http://staging-program.abcradio.net.au";
                break;
        }
        var json = rest(url + "/api/v1/programs/ppJj0E8g2R.json", {method: "GET", dataType: 'json'});

        assert.equal(json.data.entity, "Program", "<entity> not match");
        assert.equal(json.data.arid, "ppJj0E8g2R", "<arid> not match");
        assert.equal(json.data.mini_synopsis, "Mornings presents local news and issues, talking with everyday folk about current issues", "<mini_synopsis> not match");
        assert.equal(json.data.short_synopsis, "Mornings presents local news and issues, talking with everyday folk about current issues", "<short_synopsis> not match");
        assert.equal(json.data.medium_synopsis, "Mornings presents local news and issues, talking with everyday folk about current issues. Local stories and issues are at the heart of the Mornings program, bringing you fresh local and regional information - including your opportunity to ask direct questions to the ACT Chief Minster each Friday", "<medium_synopsis> not match");
        assert.equal(json.data.created_utc, "2014-10-09T05:01:49+0000", "<created_utc> not match");
        assert.equal(json.data.last_updated_utc, "2016-09-05T06:49:46+0000", "<last_updated_utc> not match");
        assert.isNull(json.data.service_airport_code, "<service_airport_code> not null");  

    });
   
    after(function () {
    }); 
});
