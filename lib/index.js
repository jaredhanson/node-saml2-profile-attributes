/**
 * Module dependencies.
 */
var x500 = require('./x500')
  , maceLegacy = require('./mace-legacy')
  , merge = require('utils-merge')
  , $ = require('xtraverse')


/**
 * Parse attributes into a profile.
 *
 * This function parses attributes contained within an assertion and returns
 * a profile object.  The profile object conforms to the contact schema
 * specified by Portable Contacts.
 *
 * SAML Attribute Profiles are used to establish stanards for attribute naming,
 * in an effort to promote interoperability.  This function supports the
 * X.500/LDAP and MACE-Dir profiles.  Support for additional profiles can be
 * implemented as necessary.
 *
 * If a profile cannot be constructed from the included attributes, `undefined`
 * will be returned.
 *
 * References:
 *   - [Portable Contacts 1.0 Draft C](http://portablecontacts.net/draft-spec.html)
 *
 * @param {String|Element} xml
 * @return {Object}
 * @api public
 */
exports.parse = function(xml) {
  // Get the attributes contained in the assertion.
  var attrs = $(xml).children('AttributeStatement', 'urn:oasis:names:tc:SAML:2.0:assertion')
                    .children('Attribute', 'urn:oasis:names:tc:SAML:2.0:assertion');
  
  // Parse the profile, utilizing various SAML attribute profiles.
  var profile = {};
  merge(profile, maceLegacy.parse(attrs));
  merge(profile, x500.parse(attrs));
  return Object.keys(profile).length ? profile : undefined;
}
