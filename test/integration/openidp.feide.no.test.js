var profile = require('index')
  , fs = require('fs');

describe('SAML assertion with attributes issued by https://openidp.feide.no', function() {
    
  var xml = fs.readFileSync(__dirname + '/../data/openidp.feide.no/2013-07-26_20-10-06.xml', 'utf8');
    
  it('should parse correctly', function() {
    var prof = profile.parse(xml);
    
    expect(prof).to.be.an('object');
    expect(prof.username).to.equal('jaredhanson');
    expect(prof.name).to.be.an('object');
    expect(prof.name.formatted).to.equal('Jared Hanson');
    expect(prof.name.familyName).to.equal('Hanson');
    expect(prof.name.givenName).to.equal('Jared');
    expect(prof.emails).to.be.an('array');
    expect(prof.emails).to.have.length(1);
    expect(prof.emails[0]).to.be.an('object');
    expect(prof.emails[0].value).to.equal('jaredhanson@example.com');
  });
  
});
