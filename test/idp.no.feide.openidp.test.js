var profile = require('index')
  , fs = require('fs');

describe('attribute statment issued by https://openidp.feide.no', function() {
    
  var xml = fs.readFileSync(__dirname + '/data/openidp.feide.no/1.xml', 'utf8');
    
  it('should parse correctly', function() {
    var prof = profile.parse(xml);
    
    expect(prof).to.be.an('object');
    expect(prof.username).to.equal('jaredhanson');
    expect(prof.name).to.be.an('object');
    expect(prof.name.formatted).to.equal('Jared Hanson');
    expect(prof.name.familyName).to.equal('Hanson');
    expect(prof.name.givenName).to.equal('Jared');
  });
  
});
