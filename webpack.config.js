module.exports = {
  entry: ["babel-polyfill", "./src/app.js"],
  output: {
    path: "./build",
    publicPath: "/assets/",
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
