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
    copyAppConfig();
    // eslint-disable-next-line no-use-before-define
    runExpo();
  });
} else {
  // eslint-disable-next-line no-use-before-define
  copyAppConfig();
  // eslint-disable-next-line no-use-before-define
  runExpo();
}

// Copy the sdk version from the parent project if it exists
function copyAppConfig() {
  const jsonPath = path.resolve(__dirname, '../../app.json');
  const expobookJsonPath = path.resolve(appExpobook, './expobook-app.json');
  const existingExpoConfig = fs.existsSync(jsonPath);
  if (!existingExpoConfig) return;
  // eslint-disable-next-line
  const json = require(jsonPath);
  if (json && json.expo) {
    // eslint-disable-next-line
    const expobookJson = require(expobookJsonPath);
    expobookJson.sdkVersion = json.expo.sdkVersion;
    fs.writeFileSync(expobookJsonPath, JSON.stringify(expobookJson, null, 2));
  }
}

function getSimulatorToRun() {
  const valueFromParam = process.argv.find(argument => ["--ios", "--android", "--web"].includes[argument])
  const defaultOSSimulatorValues = process.platform === "darwin"? "--ios" : "--android"
  return valueFromParam ? valueFromParam : defaultOSSimulatorValues
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
    `cd ${cwd} && ${expPath} start --lan ${getSimulatorToRun()} --config ${pathToConfig}`,
    {
      stdio: [process.stdin, process.stdout, process.stderr],
    },
  );
}
