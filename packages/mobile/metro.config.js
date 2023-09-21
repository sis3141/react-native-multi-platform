const path = require('path');

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  getMetroAndroidAssetsResolutionFix,
} = require('react-native-monorepo-tools');
const androidAssetsResolutionFix = getMetroAndroidAssetsResolutionFix();
const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

const config = {
  transformer: {
    publicPath: androidAssetsResolutionFix.publicPath,
    babelTransformerPath: require.resolve('react-native-svg-transformer'), //? react-native-svg module configure
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
    assetExts: assetExts.filter(ext => ext !== 'svg'), //? react-native-svg module configure
    sourceExts: [...sourceExts, 'svg'], //? react-native-svg module configure
  },
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../../node_modules/@athler/app'),
    path.resolve(__dirname, '../../node_modules/@athler/platform-lib'),
  ],
};

module.exports = mergeConfig(defaultConfig, config);
