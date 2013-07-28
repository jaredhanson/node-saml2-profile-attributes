/**
 * Module dependencies.
 */
var names = require('./names');


/**
 * Parse attributes defined by X.500/LDAP Attribute Profile.
 *
 * The X.500/LDAP Attribute Profile makes use of directory schema for attribute
 * naming.  Object identifiers assigned to directory attributes are used within
 * the URN namespace to construct attribute names.
 *
 * References:
 *   - [Profiles for the OASIS Security Assertion Markup Language (SAML) V2.0](http://docs.oasis-open.org/security/saml/v2.0/saml-profiles-2.0-os.pdf)
 *
 * @param {Collection} attrs
 * @return {Object}
 * @api public
 */
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
