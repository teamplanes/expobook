#!/usr/bin/env node
const childProcess = require('child_process');
const path = require('path');

const pathToConfig = path.resolve(process.cwd(), './node_modules/expobook/expobook-app.json');

childProcess.execSync(`exp start --lan --ios --config ${pathToConfig}`, {
  stdio: [process.stdin, process.stdout, process.stderr],
});
