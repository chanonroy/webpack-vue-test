let webpack = require('webpack');
let config = require('./webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// smaller source maps
config.devtool = '#source-map';

// autoprefix with postCSS
config.module.rules[0].options = {
  postcss: [require('autoprefixer')({ browsers: ['last 2 versions'] })]
};

 // extract text plugin on vue.js scss
config.module.rules[0].options.loaders = {
  scss: ExtractTextPlugin.extract({
    loader: 'css-loader!postcss-loader!sass-loader',
    fallbackLoader: 'vue-style-loader'
  })
};

// production plugins
config.plugins = (config.plugins || []).concat([
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
