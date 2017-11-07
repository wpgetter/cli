#!/usr/bin/env node
let jp      = require('jsonpath');
let program = require('commander');
let table   = require('table').table;

let list = require('./src/list.js');

program
  .option('-v, --vendor [type]', 'Filter by vendor, e.g. "woocommerce"')
  .parse(process.argv)
;

list.parse(program.args).then(function (items) {
  let itemsArr = [['Plugin', 'Latest Version', 'Vendor']];
  items.map(function(item) {
    itemsArr.push( [
      `${jp.value(item, '$..name')} (${jp.value(item, '$..slug')})`,
      jp.value(item, '$..versions[0].number'),
      jp.value(item, '$..vendor'),
    ]);
  });
  console.log(table(itemsArr));
});
