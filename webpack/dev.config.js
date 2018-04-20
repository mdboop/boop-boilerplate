const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./common.config.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(process.cwd(), 'client/index.js'),
  ],
  output: {
    filename: '[name].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'server/public/index.html',
    }),
  ],
});