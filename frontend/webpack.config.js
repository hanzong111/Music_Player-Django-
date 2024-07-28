/* We need to determine where is our entry Javascript file */
/* And where should we output it  */
const path = require("path");
const webpack = require("webpack");

module.exports = {
    /* Specify entry point - where is our entry Javascript file */
  entry: "./src/index.js",
  /* Where should we output it  */
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },

  /* Exclude bundeling the node modules folder and use the babel-loader */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

    /* minimize is taking our javascript code and making it smaller */
  optimization: {
    minimize: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};