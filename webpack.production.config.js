var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SRC = path.resolve(__dirname, 'src')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app.jsx'
  ],
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new HtmlWebpackPlugin({
      title: 'sofie writes'
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      _: 'lodash/fp'
    }),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      src: SRC,
      components: SRC + '/components',
      reducers: SRC + '/reducers',
      styles: SRC + '/styles',
      images: SRC + '/images'
    }
  },
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'app.bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[path][name]---[local]---[hash:base64:5]')
      },
      {
        test: /\.png$/,
        loaders: ['url-loader?limit=10000', 'image-webpack-loader?bypassOnDebug&optimizationLevel=7']
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}
