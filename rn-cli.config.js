const path = require('path');
const metroBundler = require('metro-bundler');

const config = {
  extraNodeModules: {
    'react-native': path.resolve(__dirname, './node_modules/react-native'),
  },
  // getBlacklistRE() {
  //   return metroBundler.createBlacklist([/node_modules\/react-native\/.*/]);
  // },
  getProjectRoots() {
    return [path.resolve(__dirname), path.resolve(__dirname, '../../')];
  },
};
module.exports = config;
