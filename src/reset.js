/* jshint node: true */

exports = module.exports = {};

let homeDir         = require('home-dir');
let del             = require('del');
let wpgetterHomeDir = homeDir('/.wpgetter');

exports.parse = function (args) {
  return del(wpgetterHomeDir, { force: true });
};
