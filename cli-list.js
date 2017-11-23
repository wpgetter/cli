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

  let itemsArr = [['Plugin', 'Latest Version', 'Handle `vendor/slug`']];
  items.map(function (item) {
    let name    = jp.value(item, '$..name');
    let slug    = jp.value(item, '$..slug');
    let vendor  = jp.value(item, '$..vendor');
    let version = jp.value(item, '$..versions[0].number');
    itemsArr.push([
      name,
      version,
      `${vendor}/${slug}@${version}`,
    ]);
  });

  if (itemsArr.length > 1) {
    log(table(itemsArr));
  } else {
    log('Nothing found.');
  }
});
