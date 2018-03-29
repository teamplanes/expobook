const path = require('path');
const metroBundler = require('metro-bundler');
console.log(
  'react-ext',
  path.resolve(__dirname, '../../node_modules/react-native')
);
const config = {
  extraNodeModules: {
    'react-native-ext': path.resolve(
      __dirname,
      '../../node_modules/react-native'
    ),
  },
  // getBlacklistRE() {
  //   return metroBundler.createBlacklist([/node_modules\/react-native\/.*/]);
  // },
  getProjectRoots() {
    return [path.resolve(__dirname), path.resolve(__dirname, '../../')];
  },
};
module.exports = config;
