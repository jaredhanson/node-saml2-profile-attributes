var names = require('./names');


exports.parse = function(attrs) {
  var profile = {};
  
  for (var attr = attrs.first(); attr.length > 0; attr = attr.next()) {
    if (attr.attr('Name') == names.COMMON_NAME) {
      profile.name = profile.name || {};
      profile.name.formatted = attr.children('AttributeValue', 'urn:oasis:names:tc:SAML:2.0:assertion').text();
    }
  }
  return profile;
}
