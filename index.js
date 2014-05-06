// UMD: https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.rangeParser = factory();
  }
}(this, function () {
  'use strict';

  //==================================================================

  var is = (function () {
    var is = {
      // object: function (value) {
      //   return ((value !== null) && (typeof value === 'object'));
      // },
      integer: function (value) {
        return is.number(value) && (value % 1 === 0);
      },
    };

    var types = {
      // arguments: (function () { return arguments; })(),
      // array: [],
      // date: new Date(),
      // function: function () {},
      // null: null,
      number: 0,
      // plainObject: {},
      // regexp: /(?:)/,
      string: '',
      // undefined: undefined,
    };

    var has = Object.prototype.hasOwnProperty;
    has = has.call.bind(has);
    var toS = Object.prototype.toString;
    toS = toS.call.bind(toS);

    for (var type in types)
    {
      if (has(types, type))
      {
        is[type] = (function (tag) {
          return function (value) {
            return (toS(value) === tag);
          };
        })(toS(types[type]));
      }
    }

    return is;
  })();

  //==================================================================

  var parseEntry = function (entry) {
    if (entry && is.string(entry))
    {
      entry = +entry;
    }

    if (!is.integer(entry))
    {
      throw new Error('invalid entry: '+ entry);
    }

    return entry;
  };

  var parseRange = function (range, results) {
    var i, n;

    range = range.split('-');
    n = range.length;

    if (n === 1)
    {
      results.push(parseEntry(range[0]));
      return;
    }

    if (n !== 2)
    {
      throw new Error('invalid range: '+ range);
    }

    i = parseEntry(range[0]);
    n = parseEntry(range[1]);

    if (i >= n)
    {
      throw new Error('invalid range: '+ i +'-'+ n);
    }

    for (; i <= n; ++i)
    {
      results.push(i);
    }
  };

  var parseUnion = function (union) {
    var i, n, results;
    results = [];
    union = union.split(',');
    for (i = 0, n = union.length; i < n; ++i)
    {
      parseRange(union[i], results);
    }
    return results;
  };

  var clean = function (range) {
    if (is.number(range))
    {
      range = ''+ range;
    }
    else if (!is.string(range))
    {
      throw new Error('invalid range: '+ range);
    }

    return range;
  };

  var parser = function (union) {
    return parseUnion(clean(union));
  };
  parser.withoutUnions = function (range) {
    range = clean(range);
    var results = [];
    parseRange(range, results);
    return results;
  };

  return parser;
}));
