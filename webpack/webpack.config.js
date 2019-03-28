const path = require('path');
const webpack = require('webpack');
const Entry = require('./entry');

const mode = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

//TODO HotModuleReplacementPlugin?
const webComponentConfig = {
  mode,
  entry: Entry.components,
  devtool: mode === 'development' ? 'source-map' : 'none',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    publicPath: '/yeeyee-components/',
    path: path.resolve(__dirname, '..', 'public', 'yeeyee-components'),
  },
};

const appConfig = {
  mode,
  entry: Entry.app,
  devtool: mode === 'development' ? 'source-map' : 'none',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\less$/,
        use: [
          {
            loader: 'style-loader?sourceMap', // creates style nodes from JS strings
          },
          {
            loader:
              'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'public'),
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    port: 4000,
    contentBase: path.resolve(__dirname, '..', 'public'),
    overlay: true,
    watchContentBase: true,
    host: '0.0.0.0',
  },
};

module.exports = [appConfig, webComponentConfig];
