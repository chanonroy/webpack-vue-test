const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devtool: '#eval-source-map', // generate source map
  devServer: { // config for webpack dev server
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    inline: true,
    stats: 'errors-only',
    noInfo: false
  },
  plugins: [

    new HtmlWebpackPlugin({ // adds bundle to HTML
      template: path.join(__dirname, 'templates', 'index.html'),
      filename: 'index.html', // which template
      chunks: ['main'], // which bundles to add
      // hash: true
    })

  ]
};
