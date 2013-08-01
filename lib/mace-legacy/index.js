/**
 * Module dependencies.
 */
var names = require('./names');


/**
 * Parse attributes defined by MACE-Dir Attribute Profile.
 *
 * The MACE-Dir Attribute Profile is generally compatible with the X.500/LDAP
 * Attribute Profile.  However, there exist a set of legacy attribute names that
 * are not compatible.  Support for this set of names is implemented by this
 * module.
 *
 * References:
 *   - [MACE-Dir SAML Attribute Profiles](http://middleware.internet2.edu/dir/docs/internet2-mace-dir-saml-attributes-200804.pdf)
 *
 * @param {Collection} attrs
 * @return {Object}
 * @api public
 */
exports.parse = function(attrs) {
  var profile = {};
  
  for (var attr = attrs.first('Attribute', 'urn:oasis:names:tc:SAML:2.0:assertion'); attr.length > 0; attr = attr.next('Attribute', 'urn:oasis:names:tc:SAML:2.0:assertion')) {
    if (attr.attr('Name') == names.USERID) {
      profile.username = attr.children('AttributeValue', 'urn:oasis:names:tc:SAML:2.0:assertion').text();
    } else if (attr.attr('Name') == names.COMMON_NAME) {
      profile.name = profile.name || {};
      profile.name.formatted = attr.children('AttributeValue', 'urn:oasis:names:tc:SAML:2.0:assertion').text();
    } else if (attr.attr('Name') == names.SURNAME) {
      profile.name = profile.name || {};
      profile.name.familyName = attr.children('AttributeValue', 'urn:oasis:names:tc:SAML:2.0:assertion').text();
    } else if (attr.attr('Name') == names.GIVEN_NAME) {
      profile.name = profile.name || {};
      profile.name.givenName = attr.children('AttributeValue', 'urn:oasis:names:tc:SAML:2.0:assertion').text();
    } else if (attr.attr('Name') == names.RFC822_MAILBOX) {
      profile.emails = profile.emails || [];
      profile.emails.push({ value: attr.children('AttributeValue', 'urn:oasis:names:tc:SAML:2.0:assertion').text() });
    }
  }
  return profile;
}
