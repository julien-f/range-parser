'use strict';

//====================================================================

var parseRange = require('./');

//--------------------------------------------------------------------

var each = require('lodash').each;
var expect = require('chai').expect;

//====================================================================

var data = {
  entry: {
    'as a string': [
      '1',
      [1],
    ],
    'as a number': [
      1,
      [1],
    ],
  },
  range: {
    'basic': [
      '1-3',
      [1, 2, 3],
    ],
  },
  union: {
    'of entries': [
      '1,3',
      [1, 3],
    ],
    'of ranges': [
      '1-3,5-7',
      [1, 2, 3, 5, 6, 7],
    ],
    'of entries and ranges': [
      '1-3,9,5-7,11',
      [1, 2, 3, 9, 5, 6, 7, 11],
    ],
  },
};

//--------------------------------------------------------------------

var succeed = function (parser, type) {
  each(data[type], function (data, title) {
    it('successfully parse a '+ type +' '+ title, function () {
      expect(parser(data[0])).to.have.members(data[1]);
    });
  });
};

var fail = function (parser, type) {
  each(data[type], function (data, title) {
    it('fails to parse a '+ type +' '+ title, function () {
      expect(function () {
        parser(data[0]);
      }).to.throw(Error);
    });
  });
};

describe('parseRange()', function () {
  succeed(parseRange, 'entry');
  succeed(parseRange, 'range');
  succeed(parseRange, 'union');

  describe('.parseEntry()', function () {
    succeed(parseRange.parseEntry, 'entry');

    fail(parseRange.parseEntry, 'range');
    fail(parseRange.parseEntry, 'union');
  });

  describe('.parseRange()', function () {
    succeed(parseRange.parseRange, 'entry');
    succeed(parseRange.parseRange, 'range');

    fail(parseRange.parseRange, 'union');
  });
});
