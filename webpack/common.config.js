const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: '../client/index.js'
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react-hmre'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  resolve: {
    modules: ['src', path.resolve(__dirname, '../../node_modules'), 'node_modules', 'internals/testing'],
    extensions: ['.js', '.jsx'],
    mainFields: ['browser', 'main', 'jsnext:main'],
    symlinks: false,
  },
  target: 'web',
};