#!/usr/bin/env node
const childProcess = require('child_process');
const path = require('path');
const fs = require('fs');
require('./handle-exit');

const getRel = file => path.resolve(__dirname, file);

process.chdir(getRel(__dirname, '../'));
const pathToConfig = getRel('../expobook-app.json');

// eslint-disable-next-line no-console
console.log('Installing expobook dependencies...');
childProcess.execSync('npm i', {
  stdio: [process.stdin, process.stdout, process.stderr],
});

// Rename ../react-native to ../_react-native
if (fs.existsSync(getRel('../../react-native'))) {
  fs.renameSync(getRel('../../react-native'), getRel('../../_react-native'));
}

childProcess.execSync(
  `cd ../ && ls && ./node_modules/.bin/exp start --lan --ios --config ${pathToConfig}`,
  {
    stdio: [process.stdin, process.stdout, process.stderr],
  },
);
