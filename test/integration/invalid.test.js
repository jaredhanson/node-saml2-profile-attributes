var profile = require('..')
  , fs = require('fs');

describe('SAML assertion without an attribute statement', function() {
    
  var xml = '<saml:Assertion xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xs="http://www.w3.org/2001/XMLSchema" ID="_a818dc00607742b41610f5ecf345928a2c5a32705d" Version="2.0" IssueInstant="2013-07-26T20:10:06Z"/>';
    
  it('should return undefined', function() {
    var prof = profile.parse(xml);
    
    expect(prof).to.be.undefined;
  });
  
});

describe('non-XML input', function() {
    
  var json = '{ "foo": "bar" }';
    
  it('should return undefined', function() {
    var prof = profile.parse(json);
    
    expect(prof).to.be.undefined;
  });
  
});
