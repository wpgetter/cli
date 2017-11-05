let chai    = require('chai');
let homeDir = require('home-dir');
let shell   = require('shelljs');

let assert = chai.assert;

chai.use(require('chai-fs'));

let init  = require('../lib/init.js');
let reset = require('../lib/reset.js');

let wpgetterHomeDir = homeDir('/.wpgetter');

/**
 * Test reset.
 */
describe('reset', function () {
  it('should not find wpgetter home directory', function () {
    init.parse().then(function () {
      reset.parse().then(function () {
        assert.notPathExists(wpgetterHomeDir);
      }).catch(function () {
        process.exit(255);
      });
    }).catch(function () {
      process.exit(255);
    });
  });
});
