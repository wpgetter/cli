/* jshint node: true */
let compareVersions = require('compare-versions');

let textualFilters = ['name', 'vendor'];

exports = module.exports = {};

exports.parse = function (filters, plugins = require('../public/plugins.json').plugins) {

  return new Promise(function (resolve, reject) {

    /**
     * Apply textual filters.
     */
    let applyTextualFilter = (plugins, filter, value) => plugins.filter((item) => {
      let itemValueUC   = item[filter].toUpperCase();
      let filterValueUC = value.toUpperCase();
      return itemValueUC.indexOf(filterValueUC) !== -1;
    });
    for (let i = textualFilters.length - 1; i >= 0; i--) {
      let filter = textualFilters[i];
      if (typeof filters[filter] === 'string') {
        plugins = applyTextualFilter(plugins, filter, filters[filter]);
      }
    }

    /**
     * Sort versions, newer first.
     */
    let sortByNewestVersion = (a, b) => compareVersions(a.number, b.number) < 0;
    for (let i = plugins.length - 1; i >= 0; i--) {
      plugins[i].versions.sort(sortByNewestVersion);
    }

    /**
     * Done.
     */
    resolve(plugins);
  });
};
