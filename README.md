# range-parser

[![Build Status](https://img.shields.io/travis/julien-f/range-parser/master.svg)](http://travis-ci.org/julien-f/range-parser)
[![Dependency Status](https://david-dm.org/julien-f/range-parser/status.svg?theme=shields.io)](https://david-dm.org/julien-f/range-parser)
[![devDependency Status](https://david-dm.org/julien-f/range-parser/dev-status.svg?theme=shields.io)](https://david-dm.org/julien-f/range-parser#info=devDependencies)

> Parse ranges and unions: '1-3,5-7,12' → [1, 2, 3, 5, 6, 7, 12]


## Install

Download [manually](https://github.com/julien-f/range-parser/releases) or with package-manager.

#### [npm](https://npmjs.org/package/range-parser)

```
npm install --save range-parser
```

### bower

```
bower install --save range-parser
```

## Example

```javascript
var parseRange = require('range-parser');

console.log(parseRange('5-12,15'));
//=> [5, 6, 7, 8, 9, 10, 11, 12, 15];
```

## Contributing

Contributions are *very* welcome, either on the documentation or on
the code.

You may:

- report any [issue](https://github.com/julien-f/range-parser/issues)
  you've encountered;
- fork and create a pull request.

## License

ISC © [Julien Fontanet](http://julien.isonoe.net)
