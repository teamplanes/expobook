#!/usr/bin/env node
const childProcess = require('child_process');
const path = require('path');
require('./handle-exit');

process.chdir(__dirname);
const pathToConfig = path.resolve(__dirname, './expobook-app.json');

// Install all node modules
console.log('Installing expobook dependencies...');
childProcess.execSync(`npm i`, {
  stdio: [null, null, process.stderr],
});
// Rename ../react-native to ../_react-native
childProcess.execSync(`mv ../react-native ../_react-native`, {
  stdio: [process.stdin, process.stdout, process.stderr],
});

childProcess.execSync(`exp start --lan --ios --config ${pathToConfig}`, {
  stdio: [process.stdin, process.stdout, process.stderr],
});
