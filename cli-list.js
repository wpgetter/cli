#!/usr/bin/env node
var program   = require('commander');
var term      = require('terminal-kit').terminal;
var available = [
  'woocommerce/woocommerce-subscriptions',
];

program
  .option('-v, --vendor [type]', 'Filter by vendor, e.g. "woocommerce"')
  .parse(process.argv)
;

available.map(function (name, i) {
  term.green(`[${i}]`)(' ')(name)('\n');
});
