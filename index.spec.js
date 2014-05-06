'use strict';

//====================================================================

var parseRange = require('./');

//--------------------------------------------------------------------

var expect = require('chai').expect;

//====================================================================

describe('parseRange()', function () {
  it('parses a single entry as a string', function () {
    expect(parseRange('1')).to.have.members([1]);
  });
  it('parses a single entry as a number', function () {
    expect(parseRange(1)).to.have.members([1]);
  });

  it('parses a single range', function () {
    expect(parseRange('1-3')).to.have.members([1, 2, 3]);
  });

  it('parses an union of entries', function () {
    expect(parseRange('1,3')).to.have.members([1, 3]);
  });

  it('parses an union of ranges', function () {
    expect(parseRange('1-3,5-7')).to.have.members([1, 2, 3, 5, 6, 7]);
  });

  it('parses an union of entries and ranges', function () {
    expect(parseRange('1-3,9,5-7,11')).to.have.members([
      1, 2, 3, 9, 5, 6, 7, 11
    ]);
  });
});
