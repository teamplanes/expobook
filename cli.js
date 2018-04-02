#!/usr/bin/env node
const childProcess = require('child_process');
const { ncp } = require('ncp');
const fs = require('fs');
const path = require('path');

const appExpobook = path.resolve(__dirname, '../../__expobook__');
const depExpobook = path.resolve(__dirname, './__expobook__');

// Copy the .expobook folder to the app folder
if (!fs.existsSync(appExpobook)) {
  if (!fs.existsSync(depExpobook)) {
    throw new Error('Expobook looks to be corrupt, please reinstall');
  }
  ncp(depExpobook, appExpobook, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-use-before-define
    runExpo();
  });
} else {
  // eslint-disable-next-line no-use-before-define
  runExpo();
}

function runExpo() {
  const childExp = path.resolve(__dirname, './node_modules/.bin/exp');
  const depExp = path.resolve(__dirname, '../.bin/exp');
  const isExpChild = fs.existsSync(childExp);
  const isExpDep = fs.existsSync(depExp);
  if (!isExpChild && !isExpDep) {
    throw new Error("Couldn't find exp in dependencies - run `npm i` and try again");
  }
  const expPath = isExpDep ? depExp : childExp;
  const cwd = path.resolve(appExpobook, '../');
  process.chdir(path.resolve(__dirname, '../../'));
  const pathToConfig = path.resolve(appExpobook, './expobook-app.json');
  childProcess.execSync(
    `cd ${cwd} && ${expPath} start --lan --ios --config ${pathToConfig}`,
    {
      stdio: [process.stdin, process.stdout, process.stderr],
    },
  );
}
