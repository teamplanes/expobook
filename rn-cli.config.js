const path = require('path');
const metroBundler = require('metro-bundler');

const config = {
  getBlacklistRE(platform) {
    return metroBundler.createBlacklist([/node_modules\/react-native\/.*/]);
  },
  getProjectRoots() {
    return [path.resolve(__dirname), path.resolve(__dirname, '../../')];
  },
};
module.exports = config;
