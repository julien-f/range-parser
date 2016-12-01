'use strict'

/* eslint-env jest */

var each = require('lodash/forEach')

var parseRange = require('./')

// ====================================================================

var data = {
  entry: {
    'as a string': [
      '1',
      [1]
    ],
    'as a number': [
      1,
      [1]
    ]
  },
  range: {
    'basic': [
      '1-3',
      [1, 2, 3]
    ]
  },
  union: {
    'of entries': [
      '1,3',
      [1, 3]
    ],
    'of ranges': [
      '1-3,5-7',
      [1, 2, 3, 5, 6, 7]
    ],
    'of entries and ranges': [
      '1-3,9,5-7,11',
      [1, 2, 3, 9, 5, 6, 7, 11]
    ]
  }
}

// --------------------------------------------------------------------

var succeed = function (parser, type) {
  each(data[type], function (data, title) {
    it('successfully parse a ' + type + ' ' + title, function () {
      expect(parser(data[0])).toEqual(data[1])
    })
  })
}

var fail = function (parser, type) {
  each(data[type], function (data, title) {
    it('fails to parse a ' + type + ' ' + title, function () {
      expect(function () {
        parser(data[0])
      }).toThrowError(Error)
    })
  })
}

describe('parseRange()', function () {
  succeed(parseRange, 'entry')
  succeed(parseRange, 'range')
  succeed(parseRange, 'union')

  describe('.withoutUnions()', function () {
    succeed(parseRange.withoutUnions, 'entry')
    succeed(parseRange.withoutUnions, 'range')

    fail(parseRange.withoutUnions, 'union')
  })
})
