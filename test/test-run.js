/* jshint node: true */

let chai    = require('chai');
let shell   = require('shelljs');

let expect = chai.expect;

let run = require('../lib/run.js');

describe('run', function () {
  it('should exit with non-0 code for inexistent sub-command', function () {
    let exitCode = shell.exec('node cli.js inexistent').code;
    expect(exitCode).to.not.equal('0');
  });
});
