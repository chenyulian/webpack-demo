const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "test.html",
      title: "aaa",
      template: "src/assets/index.html",
    }),
  ],
};
