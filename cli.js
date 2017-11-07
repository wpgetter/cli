#!/usr/bin/env node
let program = require('commander');

let init = require('./src/init.js');
let run  = require('./src/run.js');

program
  .version('1.0.1')
  .command('list', 'List available themes and plugins.')
  .command('reset', 'Remove files added by this program.')
  .parse(process.argv)
;

/**
 * Run command.
 */
init.parse()
  .then(() => run.parse(program.args))
;
