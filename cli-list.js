#!/usr/bin/env node
let log = console.log;

let jp      = require('jsonpath');
let program = require('commander');
let table   = require('table').table;

let list    = require('./src/list.js');

program
  .option('-n, --name [name]', 'Filter by name, e.g. "Subscriptions"')
  .option('-v, --vendor [vendor]', 'Filter by vendor, e.g. "woothemes"')
  .parse(process.argv)
;

let filters = {
  name: program.name,
  vendor: program.vendor,
};

list.parse(filters).then(function (items) {

  let itemsArr = [['Plugin', 'Latest Version', 'Vendor']];
  items.map(function (item) {
    itemsArr.push([
      `${jp.value(item, '$..name')} (${jp.value(item, '$..slug')})`,
      jp.value(item, '$..versions[0].number'),
      jp.value(item, '$..vendor'),
    ]);
  });

  if (itemsArr.length > 1) {
    log(table(itemsArr));
  } else {
    log('Nothing found.');
  }
});
