let chai    = require('chai');
let homeDir = require('home-dir');

let assert = chai.assert;

chai.use(require('chai-fs'));

let init  = require('../src/init.js');
let reset = require('../src/reset.js');

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
