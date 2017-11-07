/* jshint node: true */

exports = module.exports = {};

let homeDir       = require('home-dir');
let mkdirpPromise = require('mkdirp-promise');

exports.parse = function () {
  return mkdirpPromise(homeDir('/.wpgetter'));
};
