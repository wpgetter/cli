#!/usr/bin/env node
var program = require('commander');

program
  .version('1.0.0')
  .command('list', 'list available themes and plugins')
  .parse(process.argv)
;
