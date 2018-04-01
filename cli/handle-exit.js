const fs = require('fs');
const path = require('path');

function exitHandler() {
  if (fs.existsSync(path.resolve(__dirname, '../_react-native'))) {
    fs.renameSync(path.resolve(
      __dirname,
      '../_react-native',
      path.resolve(__dirname, '../react-native'),
    ));
  }
}

process.stdin.resume();
process.on('exit', exitHandler.bind(null, { cleanup: true }));
process.on('SIGINT', exitHandler.bind(null, { exit: true }));
process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));
process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));
process.on('uncaughtException', exitHandler.bind(null, { exit: true }));
