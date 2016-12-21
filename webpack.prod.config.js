let webpack = require('webpack');
let config = require('./webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// smaller source maps
config.devtool = '#source-map';

// pointer to vue-loader object
vueConfig = config.module.rules.filter(x => x.loader === 'vue-loader')[0];

vueConfig.options = { // autoprefix with postCSS
  postcss: [require('autoprefixer')({ browsers: ['last 2 versions'] })]
};
vueConfig.options.loaders = { // extract text plugin on vue.js scss
  scss: ExtractTextPlugin.extract({
    loader: 'css-loader!sass-loader',
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
  new ExtractTextPlugin("[name].min.css")
]);

module.exports = config;
