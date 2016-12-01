# range-parser [![Build Status](https://img.shields.io/travis/julien-f/range-parser/master.svg)](http://travis-ci.org/julien-f/range-parser)

> Parse ranges and unions: '1-3,5-7,12' → [1, 2, 3, 5, 6, 7, 12]


## Install

Download [manually](https://github.com/julien-f/range-parser/releases) or with package-manager.

#### [npm](https://npmjs.org/package/range-parser2)

```
npm install --save range-parser2
```

### bower

```
bower install --save range-parser2
```

## Example

```javascript
var parseRange = require('range-parser2');

console.log(parseRange('5-12,15'));
//=> [5, 6, 7, 8, 9, 10, 11, 12, 15];
```

## Name

The name [range-parser](https://npmjs.org/package/range-parser) was already taken so I went for *range-parser2*.

I am open to a better name ;)

## Contributing

Contributions are *very* welcome, either on the documentation or on
the code.

You may:

- report any [issue](https://github.com/julien-f/range-parser/issues)
  you've encountered;
- fork and create a pull request.

## License

ISC © [Julien Fontanet](http://julien.isonoe.net)
