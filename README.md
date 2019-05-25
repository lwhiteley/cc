# country-code

[![npm version](https://badge.fury.io/js/%40genyus%2Fcountry-code.svg)](https://badge.fury.io/js/%40genyus%2Fcountry-code)
[![Build Status](https://travis-ci.org/lwhiteley/cc.svg?branch=master)](https://travis-ci.org/lwhiteley/cc)

Country Code utility Library

## Features

- English `name` of the Country
- [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) Country `number`
- [ISO 3166-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) Country Codes
- [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) Alpha 2 Country Codes

## Installation

\$ npm install @genyus/country-code

## Usage

```javascript
const cc = require('@genyus/country-code');
cc.find({ name: 'Algeria' });
// { name: 'Algeria',
//   alpha2: 'DZ',
//   alpha3: 'DZA',
//   isoNumeric: '012' }

cc.countries.DZA.name; // 'Algeria'

cc.countries.GBR.isoNumeric; //'826'
```

Notes:

- fork and update of [country-code](https://www.npmjs.com/package/country-code)
- pull requests welcome
