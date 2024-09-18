module.exports = {
  entry: {
    main: "./src/core/main.ts",
    iframe: "./src/core/iframe.ts",
  },
  output: {
    filename: "[name].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        // exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
