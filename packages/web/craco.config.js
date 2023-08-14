const path = require("path");

const dotenv = require("dotenv");
const { getWebpackTools } = require("react-native-monorepo-tools");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const monorepoWebpackTools = getWebpackTools();
dotenv.config({
  path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`),
});
module.exports = {
  babel: {
    plugins: ["babel-plugin-react-native-web"],
    presets: ["@babel/preset-react"],
  },
  webpack: {
    configure: (webpackConfig) => {
      let targetIndex = 1;
      if (webpackConfig.module.rules.length === 1) {
        targetIndex = 0;
      }
      webpackConfig.module.rules[targetIndex].oneOf.unshift({
        test: /(\.ts$|\.tsx$)/,
        use: "babel-loader",
      });

      // Allow importing from external workspaces.
      // monorepoWebpackTools.enableWorkspacesResolution(webpackConfig);
      // Ensure nohoisted libraries are resolved from this workspace.
      monorepoWebpackTools.addNohoistAliases(webpackConfig);

      // add the top level package as a app source path so our nohoisted
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === "ModuleScopePlugin"
      );
      const [clientSrc] =
        webpackConfig.resolve.plugins[scopePluginIndex].appSrcs;
      const psvServices = path.resolve(clientSrc, "../..");
      webpackConfig.resolve.plugins[scopePluginIndex].appSrcs.push(psvServices);
      // console.log("webpackconfig : \n", JSON.stringify(webpackConfig));
      return webpackConfig;
    },
    plugins: [
      // Inject the "__DEV__" global variable.
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== "production",
      }),
      new BundleAnalyzerPlugin(),
    ],
  },
};
