const path = require("path");

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
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/",
    },
  };
};
