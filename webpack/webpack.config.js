const path = require('path');
const Entry = require('./entry');

const mode = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

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
    path: path.resolve(__dirname, '..', 'app', 'public', 'yeeyee-components'),
  },
};

module.exports = [webComponentConfig];
