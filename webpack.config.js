const path = require("path");
const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  module: {
    ...base.module,
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
