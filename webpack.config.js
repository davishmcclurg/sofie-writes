var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/',
    'babel-polyfill',
    './src/app.jsx'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'sofie writes'
    })
  ],
  devtool: 'source-map',
  watch: true,
  devServer: {
    hot: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: './dist',
    publicPath: './',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
