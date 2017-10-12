/* jshint node: true */

exports = module.exports = {};

let homeDir         = require('home-dir');
let del             = require('del');
let term            = require('terminal-kit').terminal;
let wpgetterHomeDir = homeDir('/.wpgetter');

let deleteWPGetterDirPromise = function () {
  return del(wpgetterHomeDir, { force: true });
};

exports.parse = function (args) {
  return Promise.all([deleteWPGetterDirPromise()])
    .then(function (dir) {
      if (dir == wpgetterHomeDir) {
        term('^g✓^ The directory ^_%s^ was deleted successfully.\n', wpgetterHomeDir);
      }

      return true;
    })
    .catch(function () {
      term('^r✗^ The directory ^_%s^ was not deleted successfully.\n', wpgetterHomeDir);
      return false;
    })

  ;
};
