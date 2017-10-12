#!/usr/bin/env node
let program = require('commander');
let term    = require('terminal-kit').terminal;

let list = require('./lib/list.js');

program
  .option('-v, --vendor [type]', 'Filter by vendor, e.g. "woocommerce"')
  .parse(process.argv)
;
