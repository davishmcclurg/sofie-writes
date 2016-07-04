var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var SRC = path.resolve(__dirname, 'src')

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/',
    'babel-polyfill',
    SRC + '/app.jsx'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'sofie writes'
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      Immutable: 'immutable',
      _: 'lodash/fp'
    })
  ],
  devtool: 'source-map',
  watch: true,
  devServer: {
    hot: true,
    historyApiFallback: true
  },
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
        loader: "eslint-loader?{rules:{'no-console':0,'no-debugger':0,'no-restricted-syntax':0,'no-unused-vars':0}}"
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[path][name]---[local]---[hash:base64:5]']
      },
      {
        test: /\.png$/,
        loaders: ['url-loader?limit=10000', 'image-webpack-loader?bypassOnDebug&optimizationLevel=7']
      }
    ]
  }
}
