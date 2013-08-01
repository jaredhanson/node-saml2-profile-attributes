# saml2-profile-attributes

[![Build](https://travis-ci.org/jaredhanson/node-saml2-profile-attributes.png)](http://travis-ci.org/jaredhanson/node-saml2-profile-attributes)
[![Coverage](https://coveralls.io/repos/jaredhanson/node-saml2-profile-attributes/badge.png)](https://coveralls.io/r/jaredhanson/node-saml2-profile-attributes)
[![Dependencies](https://david-dm.org/jaredhanson/node-saml2-profile-attributes.png)](http://david-dm.org/jaredhanson/node-saml2-profile-attributes)


Parse profile-related attributes in a SAML assertion.

## Install

    $ npm install saml2-profile-attributes

## Usage

```javascript
var nid = profile.parse('<saml:Assertion>...</saml:Assertion>');
// => { id: '1', displayName: 'Bob Smith', ... }
```

## Tests

    $ npm install
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
