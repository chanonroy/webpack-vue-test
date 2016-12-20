let webpack = require('webpack');
let config = require('./webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

config.devtool = '#source-map'; // smaller source maps
config.module.rules[0].options.loaders = { // extract text
  scss: ExtractTextPlugin.extract({
    loader: 'css-loader!postcss-loader!sass-loader',
    fallbackLoader: 'vue-style-loader'
  })
};
config.plugins = (config.plugins || []).concat([ // add plugins
  new webpack.optimize.UglifyJsPlugin({ // minify JS
    sourceMap: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new ExtractTextPlugin("style.css")
]);

module.exports = config;
