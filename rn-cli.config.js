const path = require('path');
const metroBundler = require('metro-bundler');

const config = {
  getBlacklistRE(platform) {
    return metroBundler.createBlacklist(platform, [
      /node_modules\/react-native\/.*/,
    ]);
  },
  getProjectRoots() {
    return [
      // Keep your project directory.
      path.resolve(__dirname),
      path.resolve(__dirname, '../../'), // path to the external module
    ];
  },
};
module.exports = config;
