var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var SRC = path.resolve(__dirname, 'src')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app.jsx'
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new HtmlWebpackPlugin({
      title: 'sofie writes'
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      Immutable: 'immutable'
    })
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
    path: './dist/',
    publicPath: './',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[path][name]---[local]---[hash:base64:5]']
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loaders: ['url-loader?limit=10000', 'image-webpack-loader?bypassOnDebug&optimizationLevel=7']
      }
    ]
  }
}
