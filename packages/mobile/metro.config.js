const path = require('path');

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  getMetroAndroidAssetsResolutionFix,
} = require('react-native-monorepo-tools');
const androidAssetsResolutionFix = getMetroAndroidAssetsResolutionFix();

const config = {
  transformer: {
    publicPath: androidAssetsResolutionFix.publicPath,
  },
  server: {
    // ...and to the server middleware.
    enhanceMiddleware: middleware => {
      return androidAssetsResolutionFix.applyMiddleware(middleware);
    },
  },
  resolver: {
    unstable_enableSymlinks: true,
    unstable_enablePackageExports: true,
    unstable_conditionNames: ['browser', 'require', 'react-native'],
  },
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../../node_modules/@athler/app'),
    path.resolve(__dirname, '../../node_modules/@athler/platform-lib'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
