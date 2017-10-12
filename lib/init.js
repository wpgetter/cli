/* jshint node: true */

exports = module.exports = {};

let homeDir         = require('home-dir');
let mkdirpPromise   = require('mkdirp-promise');
let term            = require('terminal-kit').terminal;
let wpgetterHomeDir = homeDir('/.wpgetter');

let createwpgetterDirPromise = function (dir, opts, cb) {
  dir = wpgetterHomeDir;
  return mkdirpPromise(dir, opts, cb);
};

exports.parse = function (args) {
  return Promise.all([createwpgetterDirPromise()])
    .then(function (dir, opts, cb) {
      if (dir == wpgetterHomeDir) {
        term('^g✓^ The directory ^_%s^ was created successfully.\n', wpgetterHomeDir);
      }

      return true;
    })
    .catch(function (dir, opts, cb) {
      term('^r✗^ The directory ^_%s^ was not created successfully.\n', wpgetterHomeDir);
      return false;
    });

};
