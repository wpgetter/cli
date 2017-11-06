#!/usr/bin/env node
let program = require('commander');

let list = require('./lib/list.js');

program
  .option('-v, --vendor [type]', 'Filter by vendor, e.g. "woocommerce"')
  .parse(process.argv)
;

list.parse(program.args);