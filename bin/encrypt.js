#! /usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const { randomKey, encryptFile } = require('./helpers');

let filename = argv.env ? argv.env : ".env";	
let key_str = argv.key ? argv.key : randomKey();
let iv_str = argv.iv ? argv.iv : randomKey();

encryptFile(filename, key_str, iv_str);