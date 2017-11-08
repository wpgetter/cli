/* jshint node: true */
let jp = require('jsonpath');

exports = module.exports = {};

exports.parse = function (filters) {
  return new Promise(function (resolve, reject) {
    plugins = require('../public/plugins.json').plugins;

    if (typeof filters.name === 'string') {
      plugins = jp.query(plugins, `$..[?(@.name=="${filters.name}")]`);
    }

    if (typeof filters.vendor === 'string') {
      plugins = jp.query(plugins, `$..[?(@.vendor=="${filters.vendor}")]`);
    }

    resolve(plugins);
  });
};
