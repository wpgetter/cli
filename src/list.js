/* jshint node: true */

exports = module.exports = {};

exports.parse = function (args) {
  return new Promise(function (resolve, reject) {
    let plugins = require('../public/plugins.json').plugins;
    resolve(plugins);
  });
};
