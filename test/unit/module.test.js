var profile = require('index');

describe('saml2-profile-attributes', function() {
    
  it('should export parse function', function() {
    expect(profile.parse).to.be.a('function');
  });
  
});
