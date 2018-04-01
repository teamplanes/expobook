const childProcess = require('child_process');

process.stdin.resume();

function exitHandler(options, err) {
  childProcess.execSync(`mv ../_react-native ../react-native`, {
    stdio: [process.stdin, process.stdout, process.stderr],
  });
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));
