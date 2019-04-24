const path = require("path");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const isProduction = env === "production";

  return {
    entry: "./src/app.js",

    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js",
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          // use: [MiniCssExtractPlugin.loader, "css-loader"],
          use: [isProduction ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"],
        },
      ],
    },

    plugins: [
      new Dotenv({
        path: "./.env.development",
      }),
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
    ],

    devtool: isProduction ? "source-map" : "inline-source-map",

    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/",
    },
  };
};
