const CopyPlugin = require("copy-webpack-plugin");

const baseConfig = require("../../tools/webpack/webpack.base.config");

baseConfig.entry = {
  main: "./src/core/main.ts",
  iframe: "./src/core/iframe.ts",
  background: "./src/core/background.ts",
};

baseConfig.plugins.push(
  new CopyPlugin({
    patterns: ["assets/*", "manifest.json", "data/*"],
  }),
);

module.exports = baseConfig;
