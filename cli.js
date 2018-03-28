#!/usr/bin/env node
const childProcess = require('child_process');
const path = require('path');

process.chdir(__dirname);
const pathToConfig = path.resolve(process.cwd(), './expobook-app.json');

childProcess.execSync('rollup -c ./rollup.config.js', {
  stdio: [process.stdin, process.stdout, process.stderr],
});

// childProcess.execSync(`exp start --lan --ios --config ${pathToConfig}`, {
//   stdio: [process.stdin, process.stdout, process.stderr],
// });
