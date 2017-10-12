#!/usr/bin/env node
var program   = require('commander');
var reset     = require('./lib/reset.js');

program.parse(process.argv);

reset.parse();
