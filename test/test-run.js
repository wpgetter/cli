/* jshint node: true */

let chai    = require('chai');

let expect = chai.expect;

let run = require('../lib/run.js');

describe('run', function () {
  it('should return false for inexistent sub-command', function () {
    expect(run.parse([])).to.deep.equal(false);
  });

  it('should return false for inexistent sub-command using cli.js', function () {
    expect(run.parse(['cli.js'])).to.deep.equal(false);
  });

  it('should return true for and existing sub-command', function () {
    expect(run.parse(['list'])).to.deep.equal(true);
  });

  it('should return true for and existing sub-command using cli.js', function () {
    expect(run.parse(['cli.js', 'list'])).to.deep.equal(true);
  });
});
