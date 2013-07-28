/**
 * Module dependencies.
 */
var x500 = require('./x500')
  , maceLegacy = require('./mace-legacy')
  , merge = require('utils-merge')
  , DOMParser = require('xmldom').DOMParser
  , $ = require('xtraverse')


exports.parse = function(xml) {
  if (typeof xml === 'string') {
    xml = new DOMParser().parseFromString(xml);
  }
  
  // Get the attributes contained in the assertion.
  var attrs = $(xml).children('AttributeStatement', 'urn:oasis:names:tc:SAML:2.0:assertion')
                    .children('Attribute', 'urn:oasis:names:tc:SAML:2.0:assertion');
  
  // Parse the profile, utilizing various SAML attribute profiles.
  var profile = {};
  merge(profile, maceLegacy.parse(attrs));
  merge(profile, x500.parse(attrs));
  return Object.keys(profile).length ? profile : undefined;
}
