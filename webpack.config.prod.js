const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  mode: "production",
  module: {
    ...base.module,
    rules: [
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css",
    }),
  ],
};
