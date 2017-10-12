let chai    = require('chai');
let homeDir = require('home-dir');
let shell   = require('shelljs');

let expect = chai.expect;

chai.use(require('chai-fs'));

let init  = require('../lib/init.js');
let reset = require('../lib/reset.js');

let wpgetterHomeDir = homeDir('/.wpgetter');

describe('wpgetter', function () {

  /**
   * Test init.
   */
  describe('init', function () {
    it('should create wpgetter home directory', function () {
      reset.parse().then(function () {
        init.parse().then(function () {
          expect(wpgetterHomeDir).to.be.a.directory();
        }).catch(function () {
          process.exit(255);
        });
      }).catch(function () {
        process.exit(255);
      });
    });
  });
});
