/**
 * Module dependencies.
 */
var DOMParser = require('xmldom').DOMParser


exports.parse = function(xml) {
  if (typeof xml === 'string') {
    xml = new DOMParser().parseFromString(xml);
  }
}
