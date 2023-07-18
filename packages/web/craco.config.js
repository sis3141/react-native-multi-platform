const path = require("path");

const { getWebpackTools } = require("react-native-monorepo-tools");
const webpack = require("webpack");

const monorepoWebpackTools = getWebpackTools();

module.exports = {
  babel: {
    plugins: ["babel-plugin-react-native-web"],
    presets: ["@babel/preset-react"],
  },
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /(\.ts$|\.tsx$)/,
            use: "babel-loader",
          },
        ],
      },
    },
    configure: (webpackConfig) => {
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
    ],
  },
};
