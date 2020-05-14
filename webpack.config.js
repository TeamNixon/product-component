const path = require('path');
const webpack = require('webpack');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
/**
 * Default webpack configuration for development
 */
const config = {
  entry:
    `${SRC_DIR}/app.jsx`,
    // style: path.resolve(__dirname, 'client/dist/style.css'),,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|otf)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader', 'css-loader',
        ],
      },
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          }
        }
      },
      {
        test: /\.js[x]?/s,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },

    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

/**
 * If bundling for production, optimize output
 */

module.exports = config;
