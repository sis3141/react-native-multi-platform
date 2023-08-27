module.exports = {
  presets: ['@rnx-kit/babel-preset-metro-react-native'],
  plugins: [
    ['module:react-native-dotenv', {path: '../../.env', moduleName: '@env'}],
  ],
};
