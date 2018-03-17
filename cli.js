#!/usr/bin/env node
const childProcess = require('child_process');

const pathToConfig =
  process.env.EXPOBOOK_ENV === 'development'
    ? '../expobook-app.json'
    : '../../expobook-app.json';

childProcess.execSync(`exp start --lan --ios --config ${pathToConfig}`, {
  stdio: [process.stdin, process.stdout, process.stderr],
});
